import React from 'react';
import WorkPub from './work-pub.js';
import Resp from './resp.js';
import './education.css';
import './work.css';

class Work extends React.Component {
    constructor() {
        super();
        this.state = {
            work: [],
            //array of objects
            // company: "",
            // role: "",
            // resp : [] (array of strings?)
            // city: ""
            // state: "",
            // start: { month: "", year: ""},
            // end: { month: "", year: ""},
            // id: education.length (to-be index)
            resp_form: [], 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.editForm = this.editForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.currentWork = this.currentWork.bind(this);
        this.addResp = this.addResp.bind(this);
        this.removeResp = this.removeResp.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let isCurrent = e.target[6].value;
        console.log(this.state.work.length);
        if(e.target[5].checked) {
            isCurrent = "Present";
        }
        let tempWork = { company: e.target[0].value,
            role: e.target[1].value, 
            city: e.target[2].value, 
            state: e.target[3].value,
            start: e.target[4].value,
            end: isCurrent,
            ind: this.state.work.length
            };
        this.setState({ work: [...this.state.work, tempWork] });    
        for(let i = 0; i < 5; i++) { //reset values of form
            e.target[i].value = '';
        }
    }  

    showForm = () => {
        const form3 = document.querySelector('#form3');
        if (form3.style.display === 'none') {
            form3.style.display = 'block';
        }
        else {
            form3.style.display = 'none';
        }
        //add a form to fill-out
    }

    editForm = (e, ind) => {
        e.preventDefault();
        const temp_work_form = document.querySelector(`#work_form${ind}`); //re-hide form
        const work_pub = document.querySelector(`#work_pub${ind}`); //re-publish info

        const work_company = document.querySelector(`#work_company${ind}`)
        const work_role = document.querySelector(`#work_role${ind}`)
        const work_city = document.querySelector(`#work_city${ind}`)
        const work_state = document.querySelector(`#work_state${ind}`)
        const work_start = document.querySelector(`#work_start${ind}`)
        const work_end = document.querySelector(`#work_end${ind}`)
        
        const work_current = document.querySelector(`#work_current${ind}`);
        let current_work_end = work_end.value;
        if (work_current.checked) {
            current_work_end = "Present";
        }
  
        this.setState( {work: this.state.work.map((work) => {
            if (work.ind === ind) {
                work.company = work_company.value;
                work.role = work_role.value;
                work.city = work_city.value;
                work.state = work_state.value;
                work.start = work_start.value;
                work.end = current_work_end; //handle if work is still current
                //handle responsibilities
            }
            return work;
          })
        });
        temp_work_form.style.display = 'none';
        work_pub.style.display = 'block';
    }

    deleteItem = (ind) => {
        console.log(ind);
        console.log(this.state.education);
        this.setState( (prev) => ({
            education: prev.education.slice(0, ind).concat(prev.education.slice(ind+1)) }) );

        this.setState( (prev) => ({
            education: prev.education.map((educ, newInd) => { educ.ind = newInd; return educ }) }) );
    }

    currentWork = (e, ind) => {
        //const current_work = document.querySelector('#work_current')
        let work_end;
        if (ind >= 0) {
            work_end = document.querySelector(`#work_end${ind}`);
        }
        else {
            work_end = document.querySelector('#work_end');

        }
        if (e.target.checked === true) {
            work_end.value = '';
            work_end.disabled = true;
        }
        else {
            work_end.disabled = false;
        }
    }

    addResp = () => {
        this.setState({ resp_form: [...this.state.resp_form, ''] })
        //console.log(this.state.resp_form);
    }   

    removeResp = (resp_ind) => {
        console.log(this.state.resp_form);
        this.setState( {resp_form: this.state.resp_form.slice(0, resp_ind).concat(this.state.resp_form.slice(resp_ind + 1)) });
    }

    render() {
        return (
            <div id="work_main">
                <header id="work_header">
                    <h2>Work Experience</h2>
                    <button id="work_toggle_form" onClick={ this.showForm }></button>
                </header>
                <WorkPub props={ this.state } del={ this.deleteItem } edit={ this.editForm } current={ this.currentWork }/>
                
                <form id="form3" onSubmit = {this.handleSubmit} style={{display: 'none'}}>
                    <div className="edu_left">
                        <input className="edu_form" id="company" type="text" name="company" placeholder="Company" required></input>
                        <input className="edu_form" id="role" type="text" name="role" placeholder="Engineer" required></input>
                        {/* add responsibility toggle button */}
                        
                    </div>

                    <div className="edu_right">
                        <div id="div_workLoc" className='div_Loc'>
                            <label>City, State: </label>
                            <input className="edu_form" id="edu_city" type="text" name="city" placeholder='Ipsumville' required></input>
                            <input className="edu_form" id="edu_state" type="text" name="state" placeholder='CA' maxLength="2" style={{ width: '24px' }} required
                                onKeyPress={(event) => {
                                    if (!/[A-z]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}>
                            </input>

                            {/* <Location props={ this.state } /> */}
                        </div>
                        <div id="div_work_start">
                            <label>Start: </label>
                            <input className="edu_form" id="work_start" type="month" name="work_start" required></input>
 
                        </div>
                        <div id="div_work_end">
                            <label name="work_current">If current: </label>
                            <input id="work_current" type="checkbox" onClick={ (e) => this.currentWork(e) }></input>
                            <label>End: </label>
                            <input className="edu_form" id="work_end" type="month" name="work_end" required></input>
                            {/* add if will current there */}
                        </div>
                        
                        <Resp props={ this.state } rem={ this.removeResp }/>
                        
                    </div>
                    
                    <button id="work_submit" className='edu_button' type="submit" style={{right: '10px', top: '25%'}}></button>
                    <button id="work_resp" className='edu_button' type="button" style={{right: '10px', top: '90%' }} onClick={ this.addResp }>Resp</button>

                    {/* <button id="edu_submit" type="submit" value="Submit"></button> */}
                    {/* <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input> */}
                </form>
                
            </div>

        )
    }
}

export default Work;