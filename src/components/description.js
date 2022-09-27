import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <div style={{marginTop: "30px"}}>
                <label htmlFor={ this.props.text_state }>{ this.props.text_state }: </label>
                <textarea className="edu_form" id={ this.props.text_state } type="text" defaultValue={this.props.defVal} onChange={ (e) => this.props.update(`${this.props.text_state}`, e.target.value) } required
                style={{height: "50px", width: "80%"}}
                ></textarea>
            </div>
        )
    }
}

export default Description;