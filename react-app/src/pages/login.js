import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import {Redirect} from "react-router";
import {oAuthClientID} from "./vars.js";

class Landing extends Component {
    
    state = {
        loggedIn: false
    }

    constructor(props){
        super(props);

        this.login = this.login.bind(this);
    }

    /*
        Arguments:
            response: The response from google oauth

        Sets the state to loggedIn so the user will be redirected to the home page
    */
    login(response)
    {
        console.log(response.Zi.access_token);      //<------------------------------------------------TODO: Capture access_token
        this.setState({loggedIn: true});
        
    }

    /*
        Prints to the console if the user fails to login
    */
    loginFailure()
    {
        console.log("loginFailed");
    }

    render() {

        //If the user is logged in then redirect them to the home page
        if(this.state.loggedIn)
        {
            return(<Redirect to ="/home/"/>);
        }

        return(
        <form>
            <div>
                <h3>Wicked Easy Teaching Evaluations &emsp;
                <a href="/">Home</a> &emsp;
                <a href="/about/">About</a> &emsp;
                <a href="/faq/">FAQ</a> &emsp;
                <a href = "/login/">Login</a>
                <hr/>
                </h3>
            </div>
            <div>
                <p>login</p>
            <GoogleLogin
                clientId= {oAuthClientID}
                buttonText="Login Using Your Google Account"
                onSuccess={this.login}
                onFailure={this.loginFailure}
            />
            </div>
        </form>
        )
    }
}
export default Landing;