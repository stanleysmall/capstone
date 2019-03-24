import React, { Component } from "react";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";


class View extends Component {
    
    componentDidMount()
    {
        console.log(this.props.match.params.evalName)
    }

    render() {
        return(
        <form>
            <LoggedInHeader/>
            <div>
                <p>view</p>
                
            </div>
        </form>
        )
    }
}
export default View;