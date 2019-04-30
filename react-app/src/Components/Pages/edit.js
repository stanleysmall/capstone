import React, { Component } from "react";
import {Redirect} from "react-router";

import {LoggedInHeader} from "../displayComponents";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import {putEval, getEval,publishEval} from "../../Functions/endpoints.js";

import {blankSurvey, oldEval} from "../../vars";
import { loadEvaluation, formatSurvey } from "../../Functions/parsing";

class Edit extends Component {
    
    surveyJSON = JSON.parse(JSON.stringify(blankSurvey));

    state = {
        savedEval: false,
    }

    componentDidMount() {
        document.title = 'Edit Page';

        getEval(this.props.match.params.evalName)
        .then((response) =>{
            this.surveyJSON = loadEvaluation(response, this.surveyJSON);
            this.setState({model : new Survey.Model(this.surveyJSON)});
        })
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
        this.setState({model : new Survey.Model(this.surveyJSON)});

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

       this.setState({savedEval: true});
       this.setState({evalName: this.evalTemplate.name})

       //Fresh survey JSON
       this.surveyJSON = JSON.parse(JSON.stringify(blankSurvey));
       this.setState({model : new Survey.Model(this.surveyJSON)});
   }

    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }

        if(this.state.savedEval)
        {
            return(
                <div>
                    <LoggedInHeader/>
                    <center>
                    Your evaluation <b>{this.state.evalName}</b> has been saved but not published.  You can publish it now by pressing the publish button bellow or wait to publish it at a later date.  
                    <br/>
                    <b>IMPORTANT:</b> If you choose to publish the evaluation you will NOT be able to make changes to it.  You will recieve a summary of the student responses at the date you designated for the evaluation process to end.
                    <br/>
                    <br/>
                    <button onClick = {() => {publishEval(this.state.evalName); this.props.history.push("/home/")}}> Publish </button>&emsp;
                    <button onClick = {() => this.props.history.push("/home/")}> Home </button>
                    </center>
                    
                    <script id="testingData" object={JSON.stringify(this.evalTemplate,null,2)}/>
                </div>
            )
        }
        else{

            this.state.model = new Survey.Model(this.surveyJSON);

            return(
            <div>
                <LoggedInHeader/>
                <div id="survey">
                    <Survey.Survey model={this.state.model} onComplete={this.onComplete}/>
                </div>
            </div>
            )
        }
    }
}
export default Edit;