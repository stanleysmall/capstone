import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class CourseForm extends React.Component {

    state = {
        course_Designator: '',
        courseNumber: '',
        courseSection: '',
        courseTitle: '',
        semester: '',
        facultyUnit: '',
        college: '',
        university: '',
        instructorFirst: '',
        instructorLast: '',
        instructorEmail: '',
        instructorPhone: '',
        adminName: '',
        adminEmail: '',
        beginDate: '',
        reminderTime: '',
        endDate: ''

    }

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
            course_Designator: '',
            courseNumber: '',
            courseSection: '',
            courseTitle: '',
            semester: '',
            facultyUnit: '',
            college: '',
            university: '',
            instructorFirst: '',
            instructorLast: '',
            instructorEmail: '',
            instructorPhone: '',
            adminName: '',
            adminEmail: '',
            beginDate: '',
            reminderTime: '',
            endDate: ''
        })
        window.location.href="/questions";
    }

    loadForm = () =>
    {
        this.setState({
            course_Designator: 'a',
            courseNumber: 'b',
            courseSection: 'c',
            courseTitle: 'd',
            semester: 'e',
            facultyUnit: 'f',
            college: 'g',
            university: 'h',
            instructorFirst: 'i',
            instructorLast: 'j',
            instructorEmail: 'k',
            instructorPhone: 'l',
            adminName: 'm',
            adminEmail: 'n',
            beginDate: 'o',
            reminderTime: 'p',
            endDate: 'q'
        })
    }

	componentDidMount()
	{
		fetch('http://18.224.246.184:8080/teameval/Eval/1.0.0/survey?name=COS%20140%20001')
			.then(response => response.json())
			.then(json => console.log(json))
	}

    render() {


        return(
      
        <div>
        <form>
        
        
                <Button variant = "contained" color = "primary" onClick= {e => this.loadForm(e)}>Load Form </Button>

                <br />
                <br />
          
                <TextField 
                    name = "courseDesignator"
                    label = "Course Designator"
                    helperText = "im helping"
                    value={this.state.course_Designator} 
                    onChange={e => this.change(e)}
                />
                <br />
                <br />

                <TextField 
                    name = "courseNumber"
                    label ="courseNumber" 
                    value={this.state.courseNumber} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "courseSection"
                    label ="courseSection" 
                    value={this.state.courseSection} 
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
                    name = "instructorFirst"
                    label ="instructorFirst" 
                    value={this.state.instructorFirst} 
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <TextField 
                    name = "instructorLast"
                    label ="instructorLast" 
                    value={this.state.instructorLast} 
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