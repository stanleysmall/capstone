import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedInHeader} from "../displayComponents";
import {getResults} from "../../Functions/endpoints.js";


class Results extends Component {
	
	constructor(props){
		super(props);
		
		var tag = this.props.match.params.tag;
		var tagName = this.props.match.params.tagName;
	
		//var resultsJson = getResults(tagName, tag);
		//console.log(resultsJson);
	}
	
	createTable = () => {
		let table = []
		
		for(let i=0; i<3; i++){
			let children = []
			table.push(<tr>
			<th></th>
			<th>Median</th>
			<th>Mean</th>
			<th>Std. Dev</th>
			<th>n</th>
			</tr>)
			for (let j=0; j<5; j++) {
				children.push(<td>{`${j+1}`}</td>)
			
			}
			
			table.push(<tr>{children}</tr>)
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
                {/*NOT FOR USE JUST SHOWING HOW TO ACCESS TAG PARAMETERS */}
                TagName: {this.props.match.params.tagName}
                <br/>
                Tag: {this.props.match.params.tag}
            </div>
        </form>
        )
    }
}
export default Results;