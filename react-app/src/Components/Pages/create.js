import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {Redirect} from "react-router";


import {LoggedInHeader, DynamicSelecter} from "../displayComponents";

import {getEval,putEval, getEvalNames, publishEval} from "../../Functions/endpoints.js";
import {formatSurvey, loadEvaluation} from "../../Functions/parsing.js";

import {survey} from "../../vars";
import {exampleOldEvaluation} from "../../vars";



class Create extends Component {

    state = {
        complete: false,
        savedEval: false,
        loadableEvals : [{id:0, name:"Select an evaluation"},                  
                        ],
        model:new Survey.Model(this.surveyJSON)

    };

    //JSON which defines the format of the survey that 
    //users fill out of create an evaluation.  Stores in questionTemplate.js
    surveyJSON = survey;
    evaltemplate = exampleOldEvaluation;
    testData = JSON.stringify(this.evaltemplate,null,2)
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
    }

    componentDidMount() {
        document.title = 'Create Page';
        getEvalNames().then((responseData)=>{
            for(var i = 0; i < responseData.length; i ++)
            {
                this.setState({loadableEvals: this.state.loadableEvals.concat([{id:i+1, name:responseData[i]}])});
            }
        })
        this.surveyJSON = loadEvaluation(survey, this.surveyJSON)
        this.setState({useTemplate: false});
    }

    /*
        Arguments:
            name: name of the evaluation the user wants to use as a template.  null if the user wants to start fresh

        Either creates a blank user input survey or populates a survey with the past evaluation that matches the passed name
    */
    template(name)
    {
        console.log(name);
        if(name !== "Select an evaluation")
        {
            getEval(name).then((response)=>{
                this.surveyJSON = loadEvaluation(response, this.surveyJSON)
            
            /*
            this.surveyJSON.pages[0].elements[1].defaultValue.semesterYear = "";
            this.surveyJSON.pages[0].elements[1].defaultValue.beginDate = "";
            this.surveyJSON.pages[0].elements[1].defaultValue.closeDate = "";
            this.surveyJSON.pages[0].elements[1].defaultValue.reminderTime = "";
            */
            
            this.setState({useTemplate: true});
            })

            //this.surveyJSON = loadEvaluation(exampleOldEvaluation, this.surveyJSON);
            

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
        console.log("Results: " + JSON.stringify(survey.data,null,2));

        //Format the results of the survey in a way that can be sent to the put enpoint
        this.evalTemplate = formatSurvey(survey);

        //Put the formatted survey into the database
        putEval(this.evalTemplate)

        this.setState({savedEval: true});
        this.setState({evalName: this.evalTemplate.name})

        //Fresh survey JSON
        this.surveyJSON = survey;
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

        //default to new survey
        else{

            this.state.model = new Survey.Model(this.surveyJSON);

            return(
                <div>
                    <LoggedInHeader/>
                    If you want information on this form auto-filled from a previous submission that you may then edit, please select a past evaluation to copy:   
                    &emsp;<DynamicSelecter list={this.state.loadableEvals} iden={"evaluationSelector"}/>
                    &emsp;
                    <button onClick = {() => this.template(document.getElementById("evaluationSelector").value)} > Select </button>

                    <br/>
                    <br/>

                    <div id="survey">
                        <Survey.Survey model={this.state.model} onComplete={this.onComplete}/>
                    </div>

                    <script id="testingData" object={this.testData}/>
                </div>
            )
        }
    }
}
export default Create;