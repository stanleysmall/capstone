import React, { Component } from "react";

class Home extends Component {

    render() {



        return(
            <form>
                <div>
                    <h3>Wicked Easy Teaching Evaluations &emsp;
                    <a href="/">Landing</a> &emsp;
                    <a href = "/home/">Home</a>
                    <hr/>
                    </h3>
                </div>
                <div>
                    <p>Home</p>
                    <a href="/create/">New Evaluation Form</a>
                    <br/>
                    <a href="/edit/">Edit an existing unpublished evaluation form</a>
                    <br/>
                    <a href="/results/">View Results</a>
                </div>

            </form>
        )
    }
}
export default Home;