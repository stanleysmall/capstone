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

                {/*NOT FOR USE JUST SHOWING HOW TO ACCESS TAG PARAMETERS */}
                TagName: {this.props.match.params.tagName}
                <br/>
                Tag: {this.props.match.params.tag}
            </div>
        </form>
        )
    }
}
export default Landing;