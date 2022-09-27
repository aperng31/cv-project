import React from 'react';
import DateMonth from './dateMonth';

class Checkbox extends React.Component {
    constructor() {
        super()
        this.state = {
            bool: false,
        }
        this.toggleDate = this.toggleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
        this.myCheckbox = React.createRef();
    }
    toggleDate = () => {
        const clearFinishDate = this.myRef.current;
        clearFinishDate.value = '';
        const checkbox = this.myCheckbox.current;
        if(checkbox.checked) {
            this.props.update(`${this.props.date_state}`, "Current");
        }
        this.setState( (prev) => ({bool: !prev.bool }) );
    }
    handleSubmit = (e) => {
        this.props.update(`${this.props.date_state}`, e.target.value);
    }
    render() {
        return (
            <div style={{display: 'flex', gap: '4px'}}>
                <label htmlFor='current'>Check if current: </label>
                <input id='current' ref={this.myCheckbox} type="checkbox" onChange= {this.toggleDate}></input>
                <label htmlFor={ this.props.date_state }> finish: </label>
                <input ref={this.myRef} id={ this.props.date_state } disabled={this.state.bool} type="month" defaultValue={this.props.defVal} onChange={ (e) => this.handleSubmit(e) } required></input>
            </div>
        )
    }
}
export default Checkbox