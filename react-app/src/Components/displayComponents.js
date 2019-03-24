import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LoggedInHeader extends Component {
    
    render() {
        return(
            <div>
                <h3>Wicked Easy Teaching Evaluations &emsp;
                <Link to={"/home/"}>
                    <button>Home</button>
                </Link>
                &emsp;
                <Link to={"/about/l"}>
                    <button>About</button>
                </Link>
                &emsp;
                <Link to={"/faq/l"}>
                    <button>FAQ</button>
                </Link>
                &emsp;
                <Link to={"/"}>
                    <button>Logout</button>
                </Link>
                <hr/>
                </h3>
            </div>
        )
    }
}

export class LoggedOutHeader extends Component {
    render() {
        return(
            <div>
                <h3>Wicked Easy Teaching Evaluations &emsp;
                <Link to={"/"}>
                    <button>Home</button>
                </Link>
                &emsp;
                <Link to={"/about/"}>
                    <button>About</button>
                </Link>
                &emsp;
                <Link to={"/faq/"}>
                    <button>FAQ</button>
                </Link>
                &emsp;
                <Link to={"/login/"}>
                    <button>Login</button>
                </Link>
                <hr/>
                </h3>
            </div>
        )
    }
}




export class DynamicSelecter extends Component {

    render() {
    return(
        <select id={this.props.iden}>
        {this.props.list.map(template => {
            return (
                <option key = {template.id} value={template.name}>
                    {template.name}
                </option>
            );
        })}  
    </select>
    )
}

}