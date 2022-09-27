import React from 'react';


class CityState extends React.Component {
    render() {
        return (
        <div className="city_state">
            <label htmlFor="city_input">City, State: </label>
            <input className={"city_input"} id="city_input" type="text" defaultValue={this.props.defValCity} onChange={ (e) => this.props.update("city", e.target.value) } name="city" placeholder='Ipsumville' required></input>
            <input className={"state_input"} id="state_input" type="text" defaultValue={this.props.defValState} onChange={ (e) => this.props.update("state", e.target.value) } name="state" placeholder='CA' maxLength="2" style={{ width: '24px' }} required
                onKeyPress={(event) => {
                    if (!/[A-z]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}>
            </input>
        </div>
        )
    }
}

export default CityState


