import React, { Component } from "react";
import {Redirect} from "react-router";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import {blankSurvey} from "../../vars";
import {loadEvaluation } from "../../Functions/parsing";
import {getEval} from "../../Functions/endpoints.js";


class View extends Component {
    
    surveyJSON = blankSurvey;

    componentDidMount() {
        document.title = 'View Page';
      }

    constructor(props)
    {   
        super(props);

        //Change theme to match Project Evals colors
        var defaultThemeColors = Survey
            .StylesManager
            .ThemeColors["default"];
    
        defaultThemeColors["$main-color"] = "#4CAF50";
        defaultThemeColors["$main-hover-color"] = "#45a049";
        Survey.StylesManager.applyTheme();

        this.surveyJSON = loadEvaluation(getEval(this.props.match.params.evalName), this.surveyJSON);
        
        //Change survey to only display values not allow editing
        this.surveyJSON.mode = "display";
    }

    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }

        var model = new Survey.Model(this.surveyJSON)

        return(
        <div>
            <LoggedInHeader/>
            <div id="survey">
                <Survey.Survey model={model}/>
            </div>
        </div>
        )
    }
}
export default View;