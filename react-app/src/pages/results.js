import React, { Component } from "react";
import { Link } from "react-router-dom";
import {LoggedInHeader} from "./pageHeaders.js";

class Landing extends Component {
    
    render() {
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