import React from 'react';
import CityState from './city_state';
import DateMonth from './dateMonth';
import InputText from './inputText';
import Checkbox from './checkbox';
import './education.css'
import Description from './description';

class WorkObj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            role: "",
            city: "",
            state: "",
            start: { month: "", year: ""},
            finish: { month: "", year: ""},
            description: "",
            key: ""
        }
        if (this.props.props !== undefined) {
            this.state.company = this.props.props.company;
            this.state.role = this.props.props.role;
            this.state.city = this.props.props.city;
            this.state.state = this.props.props.state;
            this.state.start = this.props.props.start;
            this.state.finish = this.props.props.finish;
            this.state.description = this.props.props.description;
            this.state.key = this.props.props.key;
        }
        else {
            console.log('no props yet - work');
        }
        this.updateState = this.updateState.bind(this);
        this.submitState = this.submitState.bind(this);
    }
    updateState = (state, val) => { //local updateState method
        this.setState({ [state]: val });
    }    
    submitState = (e) => {
        this.props.submit(e, this.state);
    }
    render() {
        return (
            <form className='edu_pub' onSubmit={ (e) => this.submitState(e) }>
                <div className='edu_left'>
                    <InputText update={this.updateState} text_state="company" defVal={this.state.company}/>
                    <InputText update={this.updateState} text_state="role" defVal={this.state.role}/>
                </div>
                <div className="edu_right">
                    <CityState update={this.updateState} defValCity={this.state.city} defValState={this.state.state}/>
                    <DateMonth update={this.updateState} date_state="start" defVal={this.state.start} />
                    <Checkbox update={this.updateState} date_state="finish"/>
                </div>
                <Description update={this.updateState} text_state="description" defVal={this.state.description}/>
                <button className='edu_button submit_button'></button>
            </form>
        )
    }
}

export default WorkObj


