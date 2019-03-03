import React, { Component } from "react";
import "./App.css";
import GoogleLogin from 'react-google-login';
import Tabs from './SimpleTabs';

class Login extends Component{
	
	
	render(){
		
		const responseGoogle = (response) => {
            console.log(response);} 
		return(
			<form> 
			<div>
			<Tabs />
			</div>
				 
			
			
		
			
			
			
			<center>
				<h1>Welcome</h1>
				Please log in to create or edit teaching evaluation forms.<hr/>
				<GoogleLogin
            clientId="http://410688583447-dashcvq6bs4t85lujq542hegi8jf9gmn.apps.googleusercontent.com/"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
			</center>
			</form>
		
		)
	}
}


export default Login;