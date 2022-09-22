import React from 'react';
import EduPub from './edu-pub';
import './education.css'

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            education: [] //array of objects
            // school: "",
            // major: "",
            // city: "",
            // state: "",
            // start: { month: "", year: ""},
            // end: { month: "", year: ""},
            // id: education.length (to-be index)
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.editForm = this.editForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let tempEdu = { school: e.target[0].value,
            major: e.target[1].value, 
            city: e.target[2].value, 
            state: e.target[3].value,
            graduated: e.target[4].value,
            ind: this.state.education.length
            };
        this.setState({ education: [...this.state.education, tempEdu] });    
        for(let i = 0; i < 5; i++) { //reset values of form
            e.target[i].value = '';
        }
    }  

    showForm = () => {
        const form2 = document.querySelector('#form2');
        if (form2.style.display === 'none') {
            form2.style.display = 'block';
        }
        else {
            form2.style.display = 'none';
        }
        //add a form to fill-out
    }

    editForm = (e, ind) => {
        e.preventDefault();
        const temp_edu_form = document.querySelector(`#edu_form${ind}`);
        const edu_pub = document.querySelector(`#edu_pub${ind}`);

        const edu_school = document.querySelector(`#edu_school${ind}`)
        const edu_major = document.querySelector(`#edu_major${ind}`)
        const edu_city = document.querySelector(`#edu_city${ind}`)
        const edu_state = document.querySelector(`#edu_state${ind}`)
        const edu_graduated = document.querySelector(`#edu_graduated${ind}`)
  
        this.setState( {education: this.state.education.map((educ) => {
            if (educ.ind === ind) {
                educ.school = edu_school.value;
                educ.major = edu_major.value;
                educ.city = edu_city.value;
                educ.state = edu_state.value;
                educ.graduated = edu_graduated.value;
            }
            return educ;
          })
        });
        temp_edu_form.style.display = 'none';
        edu_pub.style.display = 'block';
    }

    deleteItem = (ind) => {
        console.log(ind);
        console.log(this.state.education);
        this.setState( (prev) => ({
            education: prev.education.slice(0, ind).concat(prev.education.slice(ind+1)) }) );

        this.setState( (prev) => ({
            education: prev.education.map((educ, newInd) => { educ.ind = newInd; return educ }) }) );
    }

    render() {
        return (
            <div id="edu_main">
                <header id="edu_header">
                    <h2>Education</h2>
                    <button id="edu_toggle_form" onClick={ this.showForm }></button>
                </header>
                {/* Place Edu list here */}
                <EduPub props={ this.state } del={ this.deleteItem } edit={ this.editForm }/>

                <form id="form2" onSubmit = {this.handleSubmit} style={{display: 'none'}}>
                    <div className="edu_left">
                        <input className="edu_form" id="school" type="text" name="school" placeholder="School" required></input>
                        <input className="edu_form" id="major" type="text" name="major" placeholder="Physics" required></input>

                    </div>

                    <div className="edu_right">
                        <div id="div_schoolLoc">
                            <input className="edu_form" id="city" type="text" name="city" placeholder='Ipsumville' required></input>
                            <input className="edu_form" id="state" type="text" name="state" placeholder='CA' maxLength="2" style={{ width: '20px' }} required
                                onKeyPress={(event) => {
                                    if (!/[A-z]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}>
                            </input>

                            {/* <Location props={ this.state } /> */}
                        </div>

                        <div id="div_graduated">
                            <input className="edu_form" id="graduated" type="month" name="graduated" required>

                            </input>
                            {/* <Contact props={ this.state } /> */}
                        </div>
                    </div>
                    
                    <button id="edu_submit" className='edu_button' type="submit" style={{right: '10px', top: '10px'}}></button>

                    {/* <button id="edu_submit" type="submit" value="Submit"></button> */}
                    {/* <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input> */}
                </form>
                
            </div>

        )
    }
}

export default Education;