import React, { Component } from "react";
import { LoggedOutHeader, LoggedInHeader } from "../displayComponents";

class Landing extends Component {
    
    render() {

        if(this.props.match.params.loggedIn)
        {
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