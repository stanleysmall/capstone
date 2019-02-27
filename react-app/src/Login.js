import React, { Component } from "react";
import "./App.css";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

class Login extends Component{
	
	
	render(){
		return(

			<form>
			<div>
					<h3>Wicked Easy Teaching Evaluations&emsp;
					<a href="/">Home</a>&nbsp;
					<a href="/about/">About</a>&nbsp;
					<a href="/faq/">FAQ</a>&nbsp;
					<b href="/login/">Login</b><hr/></h3>
			</div>
		
			

			
			<center>
				<h1>Welcome</h1>
				Please log in to create or edit teaching evaluation forms.<hr/>
				
				<h2>Log In</h2>
				<form>
					Username
				</form>
					<form class = "fieldEntry">
					<input type="login" name="username" /> </form><br/>
					<form>
					Password<br/>
					</form>
					<form class = "fieldEntry">
					<input type="password" name="password" /> </form><br/>
					<a href="/home/">Log in </a><br/><br/>
					
					<a href="/">Create Account </a>
			</center>
			</form>
		
		)
	}
}


export default Login;