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
	
	resultsJson = getResults(this.tagName,this.tag);
	
	
	getAggregatedResults = () =>{
		
	
	
	var courseDesignators = [];
	var facultyUnits = [];
	var colleges = [];
	var universities = [];
	var resultObjectsUnder = [];
		

		
		if(this.tagName === "instructor"){
			var question1 = this.resultsJson[0];
			for(var survey in question1){
				var surveyJson = getEval(survey);
				if(!this.containsObject(surveyJson.courseDesignator, courseDesignators))
					courseDesignators.push(surveyJson.courseDesignator);
				if(!this.containsObject(surveyJson.facultyUnit, facultyUnits))
					facultyUnits.push(surveyJson.facultyUnit);
				if(!this.containsObject(surveyJson.college, colleges))
					colleges.push(surveyJson.college);
				if(!this.containsObject(surveyJson.university, universities))
					universities.push(surveyJson.university);
			}
			for(var des in courseDesignators)
				resultObjectsUnder.push(getResults('course_designator', des));
			for(var fac in facultyUnits)
				resultObjectsUnder.push(getResults('unit', fac));
			for(var col in colleges)
				resultObjectsUnder.push(getResults('college', col));
			for(var uni in universities)
				resultObjectsUnder.push(getResults('university', uni));
		}
	}
	
	componentDidMount() {
		document.title = 'Results Page';
	  }
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
		let table = []

		for(var question in this.resultsJson){
			let children = []
			table.push(<h2>{question}</h2>)
			table.push(<tr>
			<th></th>
			<th>Median</th>
			<th>Mean</th>
			<th>Std. Dev</th>
			<th>n</th>
			</tr>)
			var Q = this.resultsJson[question]
			for (var survey in Q) {
				var S = Q[survey]
				children.push(<td>{survey}</td>)
				for(var item in S){
					var value = this.resultsJson[question][survey][item]
					children.push(<td>{value}</td>)
				}
				
				
				table.push(<tr>{children}</tr>)
				
				children = []
			}
			
			if(this.tagName==='instructor'){
					for(var object in this.resultObjectsUnder){
						var surv = object[question][0];
						children.push(<td>{surv}</td>)
						for (var item in surv){
							var value = object[question][0][item]
							children.push(<td>{value}</td>)
						}
						table.push(<tr>{children}</tr>)
						children = []
					}
				}
			
		}
		return table;
		
	}
	
	createTableForCSV = () => {
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