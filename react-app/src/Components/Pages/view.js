import React, { Component } from "react";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import {survey} from "../../vars";
import {exampleOldEvaluation} from "../../vars";
import { loadEvaluation } from "../../Functions/parsing";


class View extends Component {
    
    surveyJSON = survey;

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

        this.surveyJSON = loadEvaluation(exampleOldEvaluation, this.surveyJSON);
        //this.surveyJSON = loadEvaluation(getEval(this.props.match.params.evalName), this.surveyJSON);
        
        //Change survey to only display values not allow editing
        this.surveyJSON.mode = "display";
    }

    render() {

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