import React from 'react';
import CityState from './city_state';
import DateMonth from './dateMonth';
import InputText from './inputText';
import './education.css'

class EducationObj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: "",
            major: "",
            city: "",
            state: "",
            graduated: { month: "", year: ""},
            key: ""
        }
        if (this.props.props !== undefined) {
            this.state.school = this.props.props.school;
            this.state.major = this.props.props.major;
            this.state.city = this.props.props.city;
            this.state.state = this.props.props.state;
            this.state.graduated = this.props.props.graduated;
            this.state.key = this.props.props.key;
        }
        else {
            console.log('no props yet');
        }
        this.updateState = this.updateState.bind(this);
        this.submitState = this.submitState.bind(this);
    }
    updateState = (state, val) => { //local updateState method
        this.setState({ [state]: val });
    }    
    submitState = (e) => {
        console.log(this.props.submit)
        this.props.submit(e, this.state);
    }
    render() {
        return (
            <form className='edu_pub form_obj' onSubmit={ (e) => this.submitState(e) }>
                <div className='edu_left'>
                    <InputText update={this.updateState} text_state="school" defVal={this.state.school}/>
                    <InputText update={this.updateState} text_state="major" defVal={this.state.major}/>
                </div>
                <div className="edu_right">
                    <CityState update={this.updateState} defValCity={this.state.city} defValState={this.state.state}/>
                    <DateMonth update={this.updateState} date_state="graduated" defVal={this.state.graduated} />
                </div>
                <button className='edu_button submit_button'></button>
            </form>
        )
    }
}

export default EducationObj


