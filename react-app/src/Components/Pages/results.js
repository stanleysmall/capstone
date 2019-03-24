import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedInHeader} from "../displayComponents";

class Landing extends Component {
    
    render() {

        //If the user isnt logged in redirect them to the landing page
        if(global.access_token === undefined)
        {
            return(<Redirect to ="/"/>);
        }

        return(
        <form>
                <LoggedInHeader/>
            <div>
                <p>results</p>
            </div>
        </form>
        )
    }
}
export default Landing;