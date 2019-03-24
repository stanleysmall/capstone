import React, { Component } from "react";
import { LoggedOutHeader } from "./pageHeaders";

class Landing extends Component {
    
    render() {
        return(
        <form>
            <LoggedOutHeader/>
            <div>
                <p>about</p>
            </div>
        </form>
        )
    }
}
export default Landing;