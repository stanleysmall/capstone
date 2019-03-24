import React, { Component } from "react";
import {Redirect} from "react-router";
import { LoggedOutHeader, LoggedInHeader } from "../displayComponents";

class Landing extends Component {
    
    render() {

        if(this.props.match.params.loggedIn)
        {

            //If the user isnt logged in redirect them to the logged out faq page
            if(global.access_token === undefined)
            {
                return(<Redirect to ="/faq/"/>);
            }

            return(
                <form>
                    <LoggedInHeader/>
                    <div>
                        <p>FAQ</p>
                    </div>
                </form>
                ) 
        }
        else{
        return(
            <form>
                <LoggedOutHeader/>
                <div>
                    <p>FAQ</p>
                </div>
            </form>
            )
        }
    }
}
export default Landing;