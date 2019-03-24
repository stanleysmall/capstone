import React, { Component } from "react";
import { Link } from "react-router-dom";
import {LoggedInHeader, DynamicSelecter} from "../displayComponents";

class Home extends Component {
    state = {
        editableEvals : [{id:0, name:"Select an evaluation"},
                         {id:1, name:"endpoints"},
                         {id:2, name:"aren't"},
                         {id:3, name:"working"},                  
                        ],
        inactiveEvals : [{id:0, name:"Select an evaluation"},
                         {id:1, name:"endpoints"},
                         {id:2, name:"aren't"},
                         {id:3, name:"working"},                  
                        ],
        reports :       [{id:0, name:"Select a report"},
                         {id:1, name:"endpoints"},
                         {id:2, name:"aren't"},
                         {id:3, name:"working"},                   
                        ]                         
        };

    edit(value)
    {
        this.props.history.push("/edit/" + value);
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

                    5. View Evaluation Results
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