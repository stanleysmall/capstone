import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/App.css";

export class LoggedInHeader extends Component {
    
    logout()
    {
        global.access_token = undefined;
    }

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
                    <button onClick ={this.logout}>Logout</button>
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
                    <button id='landing'>Landing</button>
                </Link>
                &emsp;
                <Link to={"/about/"}>
                    <button id='about'>About</button>
                </Link>
                &emsp;
                <Link to={"/faq/"}>
                    <button id='faq'>FAQ</button>
                </Link>
                &emsp;
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

export class RadioSelecter extends Component {
    
    state = {forceReload:false}

    radioChange(value)
    {
        this.props.onChange(value);
    }
    
    render(){
		return(
			<fieldset id = {this.props.iden}>
				<input type="radio" name="resultTagType" value="instructor" onClick={() => {this.radioChange("reportsInstructor")}} defaultChecked /> Instructor<br/>
				<input type="radio" name="resultTagType" value="courseDesignator" onClick={() => {this.radioChange("reportsCourseDes")}}/> Course Designator<br/>
				<input type="radio" name="resultTagType" value="facultyUnit" onClick={() => {this.radioChange("reportsUnit")}}/> Unit<br/>
				<input type="radio" name="resultTagType" value="college" onClick={() => {this.radioChange("reportsCollege")}}/> College<br/>
				<input type="radio" name="resultTagType" value="university" onClick={() => {this.radioChange("reportsUniversity")}}/> University<br/><br/>	
			</fieldset>
		)
	}
}
