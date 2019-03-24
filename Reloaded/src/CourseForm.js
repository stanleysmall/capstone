import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class CourseForm extends React.Component {

    state = {
        course_designator: '',
        course_number: '',
        course_section: '',
        courseTitle: '',
        semester: '',
        facultyUnit: '',
        college: '',
        university: '',
        instructor: '',
        instructorEmail: '',
        instructorPhone: '',
        adminName: '',
        adminEmail: '',
        beginDate: '',
        reminderTime: '',
        endDate: '',

    }

    //Change function changes the field that shares
    //a name with the passed component and sets it to the 
    //passed components value.
    //This occurs in both the local state and the props state
    change = (e) => {
        
        this.props.onChange({[e.target.name] : e.target.value})
        this.setState(
            {[e.target.name]: e.target.value}
        );
    };

    onSubmit = (e) =>
    {
        e.preventDefault()

        this.setState({   
            course_designator: '',
            course_number: '',
            course_section: '',
            courseTitle: '',
            semester: '',
            facultyUnit: '',
            college: '',
            university: '',
            instructor: '',
            instructorEmail: '',
            instructorPhone: '',
            adminName: '',
            adminEmail: '',
            beginDate: '',
            reminderTime: '',
            endDate: '',
        })
        window.location.href="/questions";
    }

    loadForm = () =>
    {
        //Fetch the data from the api and set the state to it
		fetch('http://18.224.246.184:8080/teameval/Eval/1.0.0/survey?name=COS%20140%20001')
        .then(response => response.json())
        .then(data => this.setState(data))
    }

	componentDidMount()
	{       
        
    }

    render() {
        
        console.log(this.state)
        return(
      
        <div>
        <form>
        
        <p>{JSON.stringify(this.state.fields, null, 2)}</p> 
                <Button variant = "contained" color = "primary" onClick= {e => this.loadForm(e)}>Load Form </Button>

                <br />
                <br />
          
                <TextField 
                    name = "course_designator"
                    label = "Course Designator"
                    //helperText = "im helping"
                    value={this.state.course_designator} 
                    onChange={e => this.change(e)}
                />
                <br />
                <br />

                <TextField 
                    name = "course_number"
                    label ="course Number" 
                    value={this.state.course_number} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "course_section"
                    label ="courseSection" 
                    value={this.state.course_section} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "courseTitle"
                    label ="courseTitle" 
                    value={this.state.courseTitle} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />
                
                <TextField 
                    name = "semester"
                    label ="semester" 
                    value={this.state.semester} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "facultyUnit"
                    label ="facultyUnit" 
                    value={this.state.facultyUnit} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "college"
                    label ="college" 
                    value={this.state.college} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "university"
                    label ="university" 
                    value={this.state.university} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "instructor"
                    label ="Instructor" 
                    value={this.state.instructor} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "instructorEmail"
                    label ="instructorEmail" 
                    value={this.state.instructorEmail} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "instructorPhone"
                    label ="instructorPhone" 
                    value={this.state.instructorPhone} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "adminName"
                    label ="adminName" 
                    value={this.state.adminName} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "adminEmail"
                    label ="adminEmail" 
                    value={this.state.adminEmail} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    type = "date"
                    label = "beginDate"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    //floatingLabel ="beginDate" 
                    value={this.state.beginDate} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    type = "time"
                    label = "reminderTime"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder="reminderTime" 
                    value={this.state.reminderTime} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    type = "date"
                    label = "endDate"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder="endDate" 
                    value={this.state.endDate} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />


                <Button variant = "contained" color = "primary" onClick= {e => this.onSubmit(e)}>Next </Button>
            </form>
            </div>
        )



    }


}