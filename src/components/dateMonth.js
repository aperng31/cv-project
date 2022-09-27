import React from 'react';
import './components.css'

class DateMonth extends React.Component {
    render() {
        return (
            <div className='date_month' disabled={this.props.ena_disa}>
                <label htmlFor={ this.props.date_state }>{ this.props.date_state }: </label>
                <input id={ this.props.date_state } type="month" defaultValue={this.props.defVal} onChange={ (e) => this.props.update(`${this.props.date_state}`, e.target.value) } required></input>
            </div>
        )
    }
}

export default DateMonth;