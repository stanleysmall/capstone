import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from "react-router";
import {LoggedInHeader, DynamicSelecter, RadioSelecter} from "../displayComponents";
import { publishEval, getUnpublishedEvalNames, getPublishedEvalNames, getTagValues } from "../../Functions/endpoints";
import "../../CSS/App.css";

class Home extends Component {
    state = {
        editableEvals : [{id:0, name:"Select an evaluation"},                 
                        ],
        inactiveEvals : [{id:0, name:"Select an evaluation"},               
                        ],
		reports : [{id:0, name: "Roy Turner"},
					{id:1, name: "Terry Yoo"},],
       
        };
		

        
		
		componentDidMount() {
        document.title = 'Home Page';
        this.reportsInstructor=getTagValues('instructor');
		this.reportsCourseSec=getTagValues('courseSection');
		this.reportsCourseDes=getTagValues('courseDesignator');
		this.reportsUnit=getTagValues('facultyUnit');
		this.reportsCollege=getTagValues('college');
        this.reportsUniversity=getTagValues('university');
      }
    
    constructor(props)
    {
        super(props);
        //console.log(global.access_token);
        var unpublishedEvals = getUnpublishedEvalNames();
        var publishedEvals = getPublishedEvalNames();

        for(var i = 0; i < unpublishedEvals.length; i ++)
        {
            this.state.editableEvals[i+1] = {id:i+1, name:unpublishedEvals[i]} 
        }

        for(i = 0; i < publishedEvals.length; i ++)
        {
            this.state.inactiveEvals[i+1] = {id:i+1, name:publishedEvals[i]} 
        }

    }

    edit(value)
    {
        if(value !== "Select an evaluation")
        {
            this.props.history.push("/edit/" + value);
        }
    }

    view(value)
    {
        if(value !== "Select an evaluation")
        {
            this.props.history.push("/view/" + value);
        }
    }

    publish(value)
    {
        if(value !== "Select an evaluation")
        {
            publishEval(value);
        }
    }
	
	results(tagName, tag){
		this.resultsTagName=tagName;
		this.resultsTag=tag;
		var radios = document.getElementsByName("resultTagType");
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				tagName=radios[i].value;
				break;
			}
		}
        if(this.resultsTag !== 'Select a report')
        {
            this.props.history.push("/results/" + tagName + "/" + tag);
        }
	}

    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }

        return(
            <div>
                <LoggedInHeader/>

                    <h3>1. Create a New Course Evaluation Form</h3>
                    <Link to={"/create/"}>
                        <button  id = "create" type="homeScreenButton">Create</button>
                    </Link>
                    

                    <h3>2. Edit an Existing Unpublished Course Evaluation Form</h3>
                    <DynamicSelecter list={this.state.editableEvals} iden={"editSelector"}/>&emsp;
                    <button  type="homeScreenButton" onClick = {() => this.edit(document.getElementById("editSelector").value)}>Edit</button>
                    

                    <h3>3. View Old Course Evaluation Form</h3>
                    <DynamicSelecter list={this.state.inactiveEvals} iden={"inactiveSelector"}/>&emsp;
                    <button type="homeScreenButton" onClick = {() => this.view(document.getElementById("inactiveSelector").value)}>View</button>
                    
                    <h3>4. Publish an Unpublished Evaluation Form</h3>
                    <DynamicSelecter list={this.state.editableEvals} iden={"publishSelector"}/>&emsp;
                    <button type="homeScreenButton" onClick = {() => this.publish(document.getElementById("publishSelector").value)}>Publish</button>
                    
					
                    <h3>5. View Evaluation Results</h3>
					<RadioSelecter iden={"tags"}/>
                    <DynamicSelecter list={this.state.reports} iden={"reports"}/>&emsp;
						
                    <button type="homeScreenButton" onClick = {() => this.results(document.getElementById("tags").value, document.getElementById("reports").value)}>View Results</button>
						
                </div>
        )
    }
	
}
export default Home;