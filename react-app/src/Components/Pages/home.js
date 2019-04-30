import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from "react-router";
import {LoggedInHeader, DynamicSelecter, RadioSelecter} from "../displayComponents";
import {getEvalNames, publishEval, getUnpublishedEvalNames, deleteSurvey, getPublishedEvalNames, getTagValues, putEval } from "../../Functions/endpoints";
import "../../CSS/App.css";
import {exampleOldEvaluation} from "../../vars";

class Home extends Component {
    state = {
        editableEvals : [{id:0, name:"Select an evaluation"},                 
                        ],
        allEvals : [{id:0, name:"Select an evaluation"},               
                        ],
		reports : [ {id:0, name: "Roy Turner"},
                    {id:1, name: "Terry Yoo"},],
        reportsInstructor: [{id:0, name: "Select an Instructor"}],
        reportsCourseDes: [{id:0, name: "Select a Course Designator"}],
        reportsUnit: [{id:0, name: "Select a Unit"}],
        reportsCollege: [{id:0, name: "Select a College"}],
        reportsUniversity: [{id:0, name: "Select an University"}],
        selectedTag : "reportsInstructor"

    };
    
    componentDidMount() {

        document.title = 'Home Page';

        getTagValues('instructor')
        .then((response) => {
            var names = [...new Set(response)];
            for(var i = 0; i < names.length; i++)
            {
                this.setState({reportsInstructor: this.state.reportsInstructor.concat([{id:i+1, name:names[i]}])});
            }
        })

        getTagValues('courseDesignator')
        .then((response) => {
            var names = [...new Set(response)];
            for(var i = 0; i < names.length; i++)
            {
                this.setState({reportsCourseDes: this.state.reportsCourseDes.concat([{id:i+1, name:names[i]}])});
            }
        })

        getTagValues('facultyUnit')
        .then((response) => {
            var names = [...new Set(response)];
            for(var i = 0; i < names.length; i++)
            {
                this.setState({reportsUnit: this.state.reportsUnit.concat([{id:i+1, name:names[i]}])});
            }
        })

        getTagValues('college')
        .then((response) => {
            var names = [...new Set(response)];
            for(var i = 0; i < names.length; i++)
            {
                this.setState({reportsCollege: this.state.reportsCollege.concat([{id:i+1, name:names[i]}])});
            }
        })

        getTagValues('university')
        .then((response) => {
            var names = [...new Set(response)];
            for(var i = 0; i < names.length; i++)
            {
                this.setState({reportsUniversity: this.state.reportsUniversity.concat([{id:i+1, name:names[i]}])});
            }
        })

        getUnpublishedEvalNames().then((responseData)=>{
            for(var i = 0; i < responseData.length; i ++)
            {
                this.setState({editableEvals: this.state.editableEvals.concat([{id:i+1, name:responseData[i]}])});
            }
        })

        getEvalNames().then((responseData) =>{
            
            for(var i = 0; i < responseData.length; i ++)
            {
                this.setState({allEvals: this.state.allEvals.concat([{id:i+1, name:responseData[i]}])});
            }
            
        })
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
    
    radioChange()
    {
        console.log("Radio Change");
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

        this.state.reports = this.state[this.state.selectedTag];

        return(
            <div>
                <LoggedInHeader/>

                    <h3>1. Create a New Course Evaluation Form</h3>
                    To create a new course evaluation form click the <b>Create</b> button bellow.  You will be able to copy a template from previous evaluations you have worked on or start from a blank evaluation.
                    <br/> <br/><Link to={"/create/"}>
                        <button  id = "create" type="homeScreenButton">Create</button>
                    </Link>
                    
                    
                    <h3>2. Edit an Existing Unpublished Course Evaluation Form</h3>
                    To edit a course evaluation form that you have previously created but not published select it from the drop down and click on the <b>Edit</b> button bellow.  You will be given the oportunity to published the evaluation upon saving any changes made.
                    <br/> <br/><DynamicSelecter list={this.state.editableEvals} iden={"editSelector"}/>&emsp;
                    <button  type="homeScreenButton" onClick = {() => this.edit(document.getElementById("editSelector").value)}>Edit</button>
                    
                    {/*
                    <h3>3. View Old Course Evaluation Form</h3>
                    <DynamicSelecter list={this.state.allEvals} iden={"inactiveSelector"}/>&emsp;
                    <button type="homeScreenButton" onClick = {() => this.view(document.getElementById("inactiveSelector").value)}>View</button>
                    
                    <h3>4. Publish an Unpublished Evaluation Form</h3>
                    <DynamicSelecter list={this.state.editableEvals} iden={"publishSelector"}/>&emsp;
                    <button type="homeScreenButton" onClick = {() => this.publish(document.getElementById("publishSelector").value)}>Publish</button>
                    */}
                    
                    <h3>3. View Evaluation Results</h3>
                    To view results of your evaluations select which type of report you would like to view and select from the drop down which report you want to view then click the <b>View Results</b> button.
					<br/> <br/><RadioSelecter iden={"tags"} state = {this.state} onChange = {(value) => {this.setState({selectedTag:value})}}/>
                    <DynamicSelecter list={this.state.reports} iden={"reports"}/>&emsp;
						
                    <button type="homeScreenButton" onClick = {() => this.results(document.getElementById("tags").value, document.getElementById("reports").value)}>View Results</button>
            </div>
        )
    }
	
}
export default Home;