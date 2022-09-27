import React from 'react';

class InputText extends React.Component {
    render() {
        return (
            <div className='input_text' >
                <label htmlFor={ this.props.text_state }>{ this.props.text_state }: </label>
                <input className="edu_form" id={ this.props.text_state } type="text" defaultValue={this.props.defVal} onChange={ (e) => this.props.update(`${this.props.text_state}`, e.target.value) } required></input>
            </div>
        )
    }
}

export default InputText;