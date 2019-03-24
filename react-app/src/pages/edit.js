import React, { Component } from "react";
import { Link } from "react-router-dom";

import {LoggedInHeader} from "./pageHeaders.js";

import * as Survey from "survey-react";
import "survey-react/survey.css";
import {Redirect} from "react-router";

import {putEval, getEval, getEvalNames} from "./endpoints.js";
import {formatSurvey, loadEvaluation} from "./parsing.js";

import {survey} from "./vars";
import {exampleOldEvaluation} from "./vars";

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