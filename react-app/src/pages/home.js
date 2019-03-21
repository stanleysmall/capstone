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
                </div>

            </form>
        )
    }
}
export default Home;