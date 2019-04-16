import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from "react-router";
import {LoggedInHeader, DynamicSelecter} from "../displayComponents";
import { getUnpublishedEvalNames, getPublishedEvalNames } from "../../Functions/endpoints";
import "../../CSS/App.css";

class Home extends Component {
    state = {
        editableEvals : [{id:0, name:"Select an evaluation"},                 
                        ],
        inactiveEvals : [{id:0, name:"Select an evaluation"},               
                        ],
        reports :       [{id:0, name:"Select a report"},
                         {id:1, name:"endpoints"},
                         {id:2, name:"aren't"},
                         {id:3, name:"working"},                   
                        ]                         
        };


    resultsTagName = "instructor";
    resultsTag = "Roy Turner";

    componentDidMount() {
        document.title = 'Home Page';
      }
    
    constructor(props)
    {
        super(props);
        console.log(global.access_token);
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

    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }

        return(
            <div>
                <LoggedInHeader/>

                    <h3>1. Create a new course & teaching evaluation form</h3>
                    <Link to={"/create/"}>
                        <button  id = "create" type="homeScreenButton">Create</button>
                    </Link>
                    

                    <h3>2. Edit an Existing Unpublished Course Evaluation Form</h3>
                    <DynamicSelecter list={this.state.editableEvals} iden={"editSelector"}/>&emsp;
                    <button  type="homeScreenButton" onClick = {() => this.edit(document.getElementById("editSelector").value)}>Edit</button>
                    

                    <h3>3. View Old Course Evaluation Form</h3>
                    <DynamicSelecter list={this.state.inactiveEvals} iden={"inactiveSelector"}/>&emsp;
                    <button type="homeScreenButton" onClick = {() => this.view(document.getElementById("inactiveSelector").value)}>View</button>
                    
					
                    <h3>4. View Evaluation Results</h3>
                    <DynamicSelecter list={this.state.reports} iden={"reports"}/>&emsp;
                    <Link to={"/results/" + this.resultsTagName + "/" + this.resultsTag}>
                        <button type="homeScreenButton">View Results</button>
                    </Link>
                </div>
        )
    }
}
export default Home;