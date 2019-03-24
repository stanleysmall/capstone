import React, { Component } from "react";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";


class Landing extends Component {
    
    render() {
        return(
        <form>
            <LoggedInHeader/>
            <div>
                <p>edit</p>
            </div>
        </form>
        )
    }
}
export default Landing;