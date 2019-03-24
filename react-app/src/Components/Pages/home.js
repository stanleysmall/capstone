import React, { Component } from "react";
import { Link } from "react-router-dom";
import {LoggedInHeader, DynamicSelecter} from "../displayComponents";
import { getEval, getUnpublishedEvalNames, getPublishedEvalNames } from "../../Functions/endpoints";

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


    constructor(props)
    {
        super(props);

        var unpublishedEvals = getUnpublishedEvalNames();
        var publishedEvals = getPublishedEvalNames();

        for(var i = 0; i < unpublishedEvals.length; i ++)
        {
            this.state.editableEvals[i+1] = {id:i+1, name:unpublishedEvals[i]} 
        }

        for(var i = 0; i < publishedEvals.length; i ++)
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



        return(
            <div>
                <LoggedInHeader/>
                    <p>Home</p>

                    1. Create a new course & teaching evaluation form
                    <br/>
                    <Link to={"/create/"}>
                        <button>Create</button>
                    </Link>
                    <br/><br/>

                    2. Edit an Existing Unpublished Course Evaluation Form
                    <br/>
                    <DynamicSelecter list={this.state.editableEvals} iden={"editSelector"}/>&emsp;
                    <button onClick = {() => this.edit(document.getElementById("editSelector").value)}>Edit</button>
                    <br/><br/>

                    3. View Inactive Course Evaluation Form
                    <br/>
                    <DynamicSelecter list={this.state.inactiveEvals} iden={"inactiveSelector"}/>&emsp;
                    <button onClick = {() => this.view(document.getElementById("inactiveSelector").value)}>view</button>
                    <br/><br/>

                    4. View Evaluation Results
                    <br/>
                    <DynamicSelecter list={this.state.reports} iden={"reports"}/>&emsp;
                    <Link to={"/results/"}>
                        <button>View Results</button>
                    </Link>
                </div>
        )
    }
}
export default Home;