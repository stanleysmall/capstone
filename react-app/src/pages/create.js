import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {Redirect} from "react-router";

import {LoggedInHeader} from "./pageHeaders.js";

import {putEval, getEval, getEvalNames} from "./endpoints.js";
import {formatSurvey, loadEvaluation} from "./parsing.js";

import {survey} from "./vars";
import {exampleOldEvaluation} from "./vars";



class Home extends Component {

    state = {
        complete: false,
        useTemplate: false,
        loadableEvals : [{id:0, name:"Select an evaluation"},                  
                        ]

    };

    //JSON which defines the format of the survey that 
    //users fill out of create an evaluation.  Stores in questionTemplate.js
    surveyJSON = survey;

    /*
        Sets the theme of the user input survey and generates a list of the names of the past surveys which can be used as templates
    */
    constructor(props){
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

        //var oldEvalNames = getEvalNames(); <------------------------------for when api calls work, currently just use list of example eval names

        var oldEvalNames = ["test eval", "test eval 2"];

        for(var i = 0; i < oldEvalNames.length; i++)
        {
            this.state.loadableEvals.push({id: i+1, name: oldEvalNames[i]})
        }

        //console.log(getEval("COS 140 001"));
    }

    /*
        Arguments:
            name: name of the evaluation the user wants to use as a template.  null if the user wants to start fresh

        Either creates a blank user input survey or populates a survey with the past evaluation that matches the passed name
    */
    template(name)
    {
        if(name !== "Select an evaluation")
        {
            //loadEvaluation(getEval(name), this.surveyJSON) <------------------------------for when api calls work, currently just load the one example old eval
            this.surveyJSON = loadEvaluation(exampleOldEvaluation, this.surveyJSON);
            
            //remove dates and classroll from the loaded evaluation
            //this.surveyJSON.pages[0].elements[4].defaultValue = "";
            //this.surveyJSON.pages[0].elements[14].defaultValue = "";
            //this.surveyJSON.pages[0].elements[15].defaultValue = "";
            //this.surveyJSON.pages[2].elements[0].defaultValue = "";
            
            this.setState({useTemplate: true});
        }
    
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
        putEval(this.evalTemplate)

        //Mark the evaluation creation completed 
        this.setState({complete: true});
    }
    

    render() {
        //If the user has completed the evaluation creation redirect to home
        if(this.state.complete)
        {
            return(<Redirect to ="/home/"/>)
        }

        //Load a new survey with the template
        if(this.state.useTemplate)
        {
            var model = new Survey.Model(this.surveyJSON);

            return(    
                <div>
                <LoggedInHeader/>     
    
                    <div id="survey">
                        <Survey.Survey model={model} onComplete={this.onComplete}/>
                    </div>
                </div>
                )
        }

        //default to new survey
        else{

            var blankModel = new Survey.Model(this.surveyJSON);

            return(
                <div>
                <LoggedInHeader/>

                    <select id="evaluationSelector">
                        {this.state.loadableEvals.map(template => {
                            return (
                                <option key = {template.id} value={template.name}>
                                    {template.name}
                                </option>
                            );
                        })}  
                    </select>
                    <button onClick = {() => this.template(document.getElementById("evaluationSelector").value)} > Use template</button>

                    <br/>
                    <br/>

                    <div id="survey">
                        <Survey.Survey model={blankModel} onComplete={this.onComplete}/>
                    </div>
                </div>
            )
        }
    }
}
export default Home;