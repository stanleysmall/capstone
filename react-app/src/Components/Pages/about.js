import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedOutHeader, LoggedInHeader} from "../displayComponents";

class Landing extends Component {
    
    render() {

        if(this.props.match.params.loggedIn)
        {

            //If the user isnt logged in redirect them to the logged out about page
            if(global.access_token === undefined)
            {
                return(<Redirect to ="/about/"/>);
            }


            return(
                <form>
                    <LoggedInHeader/>
                    <div>
                        <p>About</p>
                    </div>
                </form>
                ) 
        }
        else{
        return(
            <form>
                <LoggedOutHeader/>
                <div>
                    <p>About</p>
                </div>
            </form>
            )
        }
    }
}
export default Landing;