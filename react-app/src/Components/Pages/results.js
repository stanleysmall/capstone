import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedInHeader} from "../displayComponents";
import {getResults, getEval} from "../../Functions/endpoints.js";
import "../../CSS/App.css";
import {CSVLink} from 'react-csv';


class Results extends Component {
	
	tag=this.props.match.params.tag;
	tagName=this.props.match.params.tagName;
	/*resultsJson = {"Question 1": {
						'Survey 1':{"median": 5, "mean": 3, "std_dev": 1, "n": 43},
						'Survey 2':{"median": 3, "mean": 4, "std_dev": 2, "n": 59},
						'Survey 3':{"median": 4, "mean": 5, "std_dev": 3, "n": 38}
						},
					'Question 2':{
						'Survey 1':{"median": 4, "mean": 1, "std_dev": 2, "n": 43},
						'Survey 2':{"median": 4, "mean": 2, "std_dev": 2, "n": 59},
						'Survey 3':{"median": 5, "mean": 3, "std_dev": 2, "n": 38}
						}
		
	};*/
	
	state = {a:1};

	resultsJson = null;
	
	//Contains a list of JSON objects for aggregated results
	resultObjectsUnder = [];
	
	componentDidMount(){
	
		document.title = 'Results Page';

		getResults(this.tagName, this.tag)
		.then((response) => {this.resultsJson = response;});
		
		getAggregatedResults();
	}
	
	
	getAggregatedResults = () =>{
	
	//List of course designators, i.e [COS, MUS, NMD]
	var courseDesignators = [];
	//List of faculty units, i.e [SCIS]
	var facultyUnits = [];
	//List of colleges, i.e [Liberal Arts]
	var colleges = [];
	//List of universities, i.e [University of Maine]
	var universities = [];
		
		
		//Checks if the tag is instructor
		//If it is, need aggregated results
		if(this.tagName === "instructor"){
			//Assumes all surveys have the same first question
			var question1 = this.resultsJson[0];
			//Loops through all the surveys for the given instructor
			for(var survey in question1){
				//For each survey, retrieve its information
				var surveyJson = getEval(survey);
				
				//For each survey, check to see if its details are in the above lists
				//if not, add them
				if(!this.containsObject(surveyJson.courseDesignator, courseDesignators))
					courseDesignators.push(surveyJson.courseDesignator);
				if(!this.containsObject(surveyJson.facultyUnit, facultyUnits))
					facultyUnits.push(surveyJson.facultyUnit);
				if(!this.containsObject(surveyJson.college, colleges))
					colleges.push(surveyJson.college);
				if(!this.containsObject(surveyJson.university, universities))
					universities.push(surveyJson.university);
			}
			
			//Gets the result JSONS for each object in each list
			for(var des in courseDesignators)
			{
				getResults('courseDesignator', des)
				.then((response) => { this.resultObjectsUnder.push(response)
				this.setState({a:this.state.a + 1});
				})
			}

			for(var fac in facultyUnits)
			{
				getResults('facultyUnit', fac)
				.then((response) => {this.resultObjectsUnder.push(response);
				this.setState({a:this.state.a + 1})
				})
			}
				
			for(var col in colleges)
			{
				getResults('college', col)
				.then((response) => {this.resultObjectsUnder.push(response);
				this.setState({a:this.state.a + 1});
				})
			}

			for(var uni in universities)
				getResults('university', uni)
				.then((response) => {this.resultObjectsUnder.push(response);
				this.setState({a:this.state.a + 1})
				})
				
		}
		
	}
	
	//Simple function to see if an object is in a list
	containsObject(obj, list){
		var i;
		for(i = 0; i< list.length; i++){
			if(list[i]===obj){
				return true;
			}
		}
		return false;
	}
	  
	  
	createTable = () => {
		//Creates the HTML table for display on the screen
		
		let table = []

		for(var question in this.resultsJson){
			//Loops through every question in the results object
			
			//children will be a row
			let children = []
			//Creates a header stating the question
			table.push(<h2>{question}</h2>)
			//Creates headers for each of the 
			table.push(<tr>
			<th></th>
			<th>Median</th>
			<th>Mean</th>
			<th>Std. Dev</th>
			<th>n</th>
			</tr>)
			
			//Q is in the form {Survey 1: {'median': 5 ,'mean': 3, 'std. dev': 2, 'n': 39}, Survey 2....}
			var Q = this.resultsJson[question]
			//Loops through all the surveys for each question
			for (var survey in Q) {
				//S is in the form {Median: 3, Mean: 2, Std. Dev 3, n: 23}
				var S = Q[survey]
				//Add the name of the survey to the table
				children.push(<td>{survey}</td>)
				for(var item in S){
					//Loop through each item in the survey
					var value = this.resultsJson[question][survey][item]
					//Add the value to the table
					children.push(<td>{value}</td>)
				}
				
				//Add the row to the table 
				table.push(<tr>{children}</tr>)
				
				children = []
			}
			
			
			//If the tag is instructor, need all aggregated results
			if(this.tagName==='instructor'){
					//Loop through each object 
					for(var object in this.resultObjectsUnder){
						//Assumes every survey has the same first question
						var surv = object[question][0];
						//surv has will be COS or SCIS.. etc
						children.push(<td>{surv}</td>)
						for (var item in surv){
							//adds each value to the table
							var value = object[question][0][item]
							children.push(<td>{value}</td>)
						}
						//adds the row to the table
						table.push(<tr>{children}</tr>)
						children = []
					}
				}
			
		}
		return table;
		
	}
	
	createTableForCSV = () => {
		//Does the exact same thing as above except in a different format suitable for CSV
		let table= [['Question','Survey','Median','Mean','Standard Deviation','n']]
		
		for(var question in this.resultsJson){
			var Q = this.resultsJson[question]
			table.push([question])
			for (var survey in Q) {
				var S = Q[survey]
				
				let newItem = [survey]
				for(var item in S){
					var value = this.resultsJson[question][survey][item]
					newItem.push(value)
				}
				table.push(newItem)

			}
			
			for (var survey in Q) {
				var S = Q[survey]
				let newItem = [survey]
				for(var item in S){
					var value = this.resultsJson[question][survey][item]
					newItem.push(value)
				}
				
				
				table.push(newItem)
				newItem = []
			}
			
		}
		return table;
	}
	
	
	
    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }
		
        return(
		
        <form>	
                <LoggedInHeader/>
            <div>
				<CSVLink data={this.createTableForCSV()}>Download Results</CSVLink>
				<h3>Displaying Results for {this.tag}</h3>
				<table>
				{this.createTable()}
				</table>
            </div>
        </form>
        )
    }
}
export default Results;