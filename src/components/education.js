import React from 'react';
import EduPub from './edu-pub';
import './education.css'
import EducationObj from './educationObj';
import uniqid from "uniqid";

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            education: [], //array of objects
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editState = this.editState.bind(this);
    }

    handleSubmit = (e, newObj) => { //when new object is submitted
        e.preventDefault();
        newObj.key = uniqid();
        console.log(newObj.key);
        this.setState( (prev) => ({ education: [...prev.education, newObj] }));    
        //need to reset values of forms as well??
    }  

    editState = (e, newObj) => { //when edit is "submitted"
        e.preventDefault();
        console.log(newObj);
        this.setState({ education: this.state.education.map(obj => {
            if (obj.key === newObj.key) {
                obj = newObj;
            }
            return obj;
        }) }) 
    }
    
    showForm = () => {
        const edu_form = document.querySelector('#edu_form_main');
        if (edu_form.style.display === 'none') {
            edu_form.style.display = 'block';
        }
        else {
            edu_form.style.display = 'none';
        }
    }

    deleteItem = (key) => {
        this.setState( (prev) => ({ education: prev.education.filter(elem => elem.key !== key) }) );
    }

    render() {
        return (
            <div className="main">
                <header className="main_header">
                    <h2>Education</h2>
                    <button className='edu_button toggle_button' onClick={ this.showForm } style={{right: '0px'}}></button>
                </header>

                <div className='pub_container'>
                    { this.state.education.map(elem => {return (<EduPub props={ elem } del={this.deleteItem} edit={this.editState}/>) })}
                </div>

                <div id='edu_form_main' style={{display: 'none'}}>
                    <EducationObj update={this.editState} submit={this.handleSubmit}/>
                </div>            
            </div>
        )
    }
}

export default Education;