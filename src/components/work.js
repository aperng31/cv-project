import React from 'react';
import WorkPub from './work-pub.js';
import Resp from './resp.js';
import './education.css';
import WorkObj from './workObj.js';
import uniqid from 'uniqid';

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
            // finish: { month: "", year: ""},
            resp_form: [], 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.editState = this.editState.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.respFormUpdate = this.respFormUpdate.bind(this);
    }

    handleSubmit = (e, newObj) => { //when new object is submitted
        e.preventDefault();
        newObj.key = uniqid();
        console.log(newObj.key);
        this.setState( (prev) => ({ work: [...prev.work, newObj] }));    
        //need to reset values of forms as well??
    }  

    showForm = () => {
        const work_form = document.querySelector('#work_form_main');
        if (work_form.style.display === 'none') {
            work_form.style.display = 'block';
        }
        else {
            work_form.style.display = 'none';
        }
    }

    editState = (e, newObj) => { //when edit is "submitted"
        e.preventDefault();
        console.log(newObj);
        this.setState({ work: this.state.work.map(obj => {
            if (obj.key === newObj.key) {
                obj = newObj;
            }
            return obj;
        }) }) 
    }

    deleteItem = (key) => {
        this.setState( (prev) => ({ work: prev.work.filter(elem => elem.key !== key) }) );
    }

    respFormUpdate = (form) => {
        this.setState({ resp_form: form });
    }

    render() {
        return (
            <div className="main">
                <header className="main_header">
                    <h2>Work Experience</h2>
                    <button className='edu_button toggle_button' style={{right: '0px'}} onClick={ this.showForm }></button>
                </header>
                
                <div className='pub_container'>
                    { this.state.work.map(elem => {return (<WorkPub props={ elem } del={this.deleteItem} edit={this.editState}/>) })}
                </div>

                <div id='work_form_main' style={{display: 'none'}}>
                    <WorkObj update={this.editState} submit={this.handleSubmit}/>
                </div>  
                    {/* <Resp props={ this.state } update={this.respFormUpdate}/> */}
                    {/* <button id="work_submit" className='edu_button' type="submit" style={{right: '10px', top: '25%'}}></button> */}
                    {/* <button id="edu_submit" type="submit" value="Submit"></button> */}
                    {/* <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input> */}
            </div>

        )
    }
}

export default Work;