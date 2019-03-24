import React, { Component } from "react";
import {LoggedOutHeader} from "../displayComponents";


class Landing extends Component {
    
    render() {
        return(
        <form>
            <LoggedOutHeader/>
            <div>
                <p>landing</p>
            </div>
        </form>
        )
    }
}
export default Landing;