import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedInHeader} from "../displayComponents";
import {getResults, getEval} from "../../Functions/endpoints.js";
import "../../CSS/App.css";
import {CSVLink} from 'react-csv';


class Results extends Component {
	
	tag=this.props.match.params.tag;
	tagName=this.props.match.params.tagName;
	/*resultsJson = {"How prepared was the instructor for class?": {
						'COS 420 001':{"median": 4, "mean": 4.2, "std_dev": .63, "n": 24},
						'COS 225 002':{"median": 3, "mean": 3.3, "std_dev": .82, "n": 41},
						'COS 125 001':{"median": 3, "mean": 3.5, "std_dev": .47, "n": 63},
						'All COS courses:{"median": 3, "mean": 3.7, "std_dev": .23, "n": 128}, 
						'All SCIS courses':{"median": 3, "mean": 3.7, "std_dev": .23, "n": 128},
						'All Liberal Arts courses':{"median": 3, "mean": 3.7, "std_dev": .23, "n": 128},
						'All University of  courses':{"median": 3, "mean": 3.7, "std_dev": .23, "n": 128},
						},
					"How clearly were the objective of the course presented?": {
						'COS 420 001':{"median": 2, "mean": 2.2, "std_dev": .51, "n": 24},
						'COS 225 002':{"median": 3, "mean": 2.9, "std_dev": .52, "n": 41},
						'COS 125 001':{"median": 3, "mean": 3.5, "std_dev": .87, "n": 63},
						'All COS courses:{"median": 3, "mean": 3.1, "std_dev": .43, "n": 128}, 
						'All SCIS courses':{"median": 3, "mean": 3.1, "std_dev": .43, "n": 128},
						'All Liberal Arts courses':{"median": 3, "mean": 3.1, "std_dev": .43, "n": 128},
						'All University of  courses':{"median": 3, "mean": 3.1, "std_dev": .43, "n": 128},
						},
		
	};*/
	
	state = {a:1};

	resultsJson = null;
	
	//Contains a list of JSON objects for aggregated results
	resultObjectsUnder = [];
	
	componentDidMount(){
	
		document.title = 'Results Page';

		getResults(this.tagName, this.tag)
		.then((response) => {
			this.resultsJson = response;
			if(this.resultsJson!==null)	
				this.getAggregatedResults();
			this.setState({a:this.state.a + 1});
		});
	}
	
	
	getAggregatedResults = () =>{
	
	//List of course designators, i.e [COS, MUS, NMD]
	var courseDesignators = ['a'];
	//List of faculty units, i.e [SCIS]
	var facultyUnits = ['a'];
	//List of colleges, i.e [Liberal Arts]
	var colleges = ['a'];
	//List of universities, i.e [University of Maine]
	var universities = ['a'];
		
		
		//Checks if the tag is instructor
		//If it is, need aggregated results
		if(this.tagName === "instructor"){
			//Assumes all surveys have the same first question
			var question1 = this.resultsJson[Object.keys(this.resultsJson)[0]];
			//Loops through all the surveys for the given instructor
			for(var survey in question1){
				//For each survey, retrieve its information
				var surveyJson = null;
				getEval(survey)
				.then((response) =>{
					surveyJson = response;
				
				//For each survey, check to see if its details are in the above lists
				//if not, add them
				if(!this.containsObject(surveyJson.courseDesignator, courseDesignators)){
					courseDesignators.push(surveyJson.courseDesignator);
					console.log("DES : " + surveyJson.courseDesignator);
				}
				if(!this.containsObject(surveyJson.facultyUnit, facultyUnits))
					facultyUnits.push(surveyJson.facultyUnit);
				if(!this.containsObject(surveyJson.college, colleges))
					colleges.push(surveyJson.college);
				if(!this.containsObject(surveyJson.university, universities))
					universities.push(surveyJson.university);});
			}
			
			console.log("LIST: " + courseDesignators);
			
			//Gets the result JSONS for each object in each list
			for(var des in courseDesignators)
			{
				getResults('courseDesignator', courseDesignators[des])
				.then((response) => { this.resultObjectsUnder.push(JSON.stringify(response, null, 2))
				this.setState({a:this.state.a + 1});
				})
			}

			for(var fac in facultyUnits)
			{
				getResults('facultyUnit', facultyUnits[fac])
				.then((response) => {this.resultObjectsUnder.push(JSON.stringify(response, null, 2));
				this.setState({a:this.state.a + 1});
				})
			}
				
			for(var col in colleges)
			{
				getResults('college', colleges[col])
				.then((response) => {this.resultObjectsUnder.push(JSON.stringify(response, null, 2));
				this.setState({a:this.state.a + 1});
				})
			}

			for(var uni in universities)
				getResults('university', universities[uni])
				.then((response) => {this.resultObjectsUnder.push(JSON.stringify(response, null, 2));
				this.setState({a:this.state.a + 1});
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
		if(this.resultsJson===null){
			table.push(<h2>{"There are currently no results for this category. Please check back later."}</h2>)
		}else{
			for(var question in this.resultsJson){
				//Loops through every question in the results object
				
				//children will be a row
				let children = []
				//Creates a header stating the question
				table.push(<h3>{question}</h3>)
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
					//Add the name of the survey to the table
					children.push(<td>{survey}</td>)
						//Loop through each item in the survey
						var value = this.resultsJson[question][survey]['median']
						//Add the value to the table
						children.push(<td>{value}</td>)
						var value = this.resultsJson[question][survey]['mean']
						//Add the value to the table
						children.push(<td>{value}</td>)
						var value = this.resultsJson[question][survey]['std_dev']
						//Add the value to the table
						children.push(<td>{value}</td>)
						var value = this.resultsJson[question][survey]['n']
						//Add the value to the table
						children.push(<td>{value}</td>)
					
					
					//Add the row to the table 
					table.push(<tr>{children}</tr>)
					
					children = []
				}
				
				console.log("objects please: " + this.resultObjectsUnder);
				//If the tag is instructor, need all aggregated results
				if(this.tagName==='instructor'){
						//Loop through each object 
						for(var i=0; i++; i<this.resultObjectsUnder.length){
							//Assumes every survey has the same first question
							console.log("OBJECT?? ? ?? " + this.resultObjectsUnder[i]);
							var surv = this.resultObjectsUnder[i][question];
							//surv has will be COS or SCIS.. etc
							children.push(<td>{surv}</td>)
								//adds each value to the table
								var value = object[question][surv]['median']
								children.push(<td>{value}</td>)
								var value = object[question][surv]['mean']
								children.push(<td>{value}</td>)
								var value = object[question][surv]['std_dev']
								children.push(<td>{value}</td>)
								var value = object[question][surv]['n']
								children.push(<td>{value}</td>)

							//adds the row to the table
							table.push(<tr>{children}</tr>)
							children = []
						}
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
					var value = this.resultsJson[question][survey]['median']
					newItem.push(value)
					var value = this.resultsJson[question][survey]['mean']
					newItem.push(value)
					var value = this.resultsJson[question][survey]['std_dev']
					newItem.push(value)
					var value = this.resultsJson[question][survey]['n']
					newItem.push(value)
				
				table.push(newItem)

			}
			
			if(this.tagName==='intsructor'){
				for (var i=0; i++; i< this.resultObjectsUnder.length) {
				var survey = this.resultObjectsUnder[i][question];
				let newItem = [survey]
				
				var value = this.resultsJson[question][survey]['median']
				newItem.push(value)
				var value = this.resultsJson[question][survey]['mean']
				newItem.push(value)
				var value = this.resultsJson[question][survey]['std_dev']
				newItem.push(value)
				var value = this.resultsJson[question][survey]['n']
				newItem.push(value)
				
				
				
				table.push(newItem)
				newItem = []
				}
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