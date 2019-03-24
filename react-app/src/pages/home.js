import React, { Component } from "react";
import { Link } from "react-router-dom";
import {LoggedInHeader} from "./pageHeaders.js";

class Home extends Component {

    render() {



        return(
            <form>
                <LoggedInHeader/>
                
                <div>
                    <p>Home</p>
                    <Link to={"/create/"}>
                        <button>New Evaluation Form</button>
                    </Link>

                    <br/>
                    <Link to={"/edit/"}>
                        <button>Edit</button>
                    </Link>

                    <br/>
                    <Link to={"/results/"}>
                        <button>View Results</button>
                    </Link>
                </div>

            </form>
        )
    }
}
export default Home;