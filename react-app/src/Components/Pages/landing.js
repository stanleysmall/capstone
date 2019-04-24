import React, { Component } from "react";
import {LoggedOutHeader} from "../displayComponents";
import GoogleLogin from 'react-google-login';
import {Redirect} from "react-router";
import {oAuthClientID} from "../../vars";
import { loginEndpoint } from "../../Functions/endpoints";

class Landing extends Component {
    
	state = {
        loggedIn: false
    }

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        document.title = 'Landing Page';
      }

    /*
        Arguments:
            response: The response from google oauth

        Sets the state to loggedIn so the user will be redirected to the home page
    */
    login(response)
    {
        var login = loginEndpoint(response.Zi.access_token).then(() =>{
        global.access_token = response.Zi.access_token;
        console.log(response.Zi.access_token);
        this.setState({loggedIn: true});
        })
        
    }

    /*
        Prints to the console if the user fails to login
    */
    loginFailure()
    {
        console.log("loginFailed");
    }
	
	
    render() {
		
		
		if(this.state.loggedIn)
        {
            return(<Redirect to ="/home/"/>);
        }
		
		
        return(
        <form>
            <LoggedOutHeader/>
            <div>
                <center>
				<h1>We make the creation of teaching <br/> evaluations and the reporting of<br/> student responses wicked easy!</h1><br/>
				
					We provide a secure open source platform available at no cost to any teacher or university<br/>
					caring to make use of it. Whether you are an individual instructor for an evening dance class or<br/>
					the assessment administrator at a major university with hundreds of semester long courses,<br/>
					this free and highly flexbile platform should greatly ease the process of gaining student<br/>
					feedback for assessing teacher performance and evaluating course success.<br/><br/>
					
					The software and databases are designed to ensure anonymity for student respondents. The<br/>
					system ensures that only validated class members may respond and each student may respond<br/>
					only with a single submission.<br/><br/>
				<div id='login'>
				<GoogleLogin
					clientId= {oAuthClientID}
					buttonText="Login"
					onSuccess={this.login}
                    onFailure={this.loginFailure}
                    
				/>
                </div>
				</center>
            </div>
        </form>
        )
    }
}
export default Landing;