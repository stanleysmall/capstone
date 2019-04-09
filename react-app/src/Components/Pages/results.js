import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedInHeader} from "../displayComponents";
import {getResults} from "../../Functions/endpoints.js";
import "../../CSS/App.css";


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
				<table>
				{this.createTable()}
				</table>
            </div>
        </form>
        )
    }
}
export default Results;