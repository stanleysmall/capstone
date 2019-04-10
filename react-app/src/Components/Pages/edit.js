import React, { Component } from "react";
import {Redirect} from "react-router";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import {putEval} from "../../Functions/endpoints.js";

import {survey} from "../../vars";
import {exampleOldEvaluation} from "../../vars";
import { loadEvaluation, formatSurvey } from "../../Functions/parsing";


class Edit extends Component {
    
    surveyJSON = survey;

    componentDidMount() {
        document.title = 'Edit Page';
      }

    constructor(props)
    {   
        super(props);

        //Bind this in the onComplete function so we can access state and other functions through it
        this.onComplete = this.onComplete.bind(this);

        //Change theme to match Project Evals colors
        var defaultThemeColors = Survey
            .StylesManager
            .ThemeColors["default"];
    
        defaultThemeColors["$main-color"] = "#4CAF50";
        defaultThemeColors["$main-hover-color"] = "#45a049";
        Survey.StylesManager.applyTheme();

        this.surveyJSON = loadEvaluation(exampleOldEvaluation, this.surveyJSON);



        //this.surveyJSON = loadEvaluation(getEval(this.props.match.params.evalName), this.surveyJSON);
        console.log(this.props)
    }

    /*
    Arguments:
        survey: completed SurveyJS object which was created using the surveyJSON
        options: ???

    Called upon completion of the survey, formats the users input to match the database endpoint
    specs, enters the evaluation into the database then redirects the user back to the home page
    */
   onComplete(survey, options)
   {
       //Log the results of the survey  DEBUGGING
       //console.log("Results: " + JSON.stringify(survey.data,null,2));

       //Format the results of the survey in a way that can be sent to the put enpoint
       this.evalTemplate = formatSurvey(survey);

       //Put the formatted survey into the database
       putEval(this.evalTemplate);

       //redirect home 
       this.props.history.push("/home/");
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
                <Survey.Survey model={model} onComplete={this.onComplete}/>
            </div>
        </div>
        )
    }
}
export default Edit;