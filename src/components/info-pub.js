import React from 'react';
import './info.css'

class InfoPub extends React.Component {
    constructor(props) {
        super(props);

    } 
    render() {
        return (
            <div id="info_pub" style={{ display: 'none' }}>
                <div>
                    { this.props.props.fullname }
                </div>
                <div>
                    { this.props.props.address } &nbsp;
                    { this.props.props.city } &nbsp;
                    { this.props.props.state } 
                </div>
                <div>
                    { this.props.props.number }
                </div>
                <div>
                    { this.props.props.email }  
                
                </div>
                
                <button id="edit_button" onClick={ this.props.edit }>Edit</button>


            </div>

        )
    }
}

class FullName extends React.Component {
    render() {
        return (
            <div className="info_pub">
                { this.props.props.fullname }
            </div>
        )
    }
}

function Location(props) {
    return (
        <div className="info_pub">
            { props.props.address }&nbsp;
            { props.props.city + ','}&nbsp;
            { props.props.state } 
        </div>
    )
}

function Contact(props) {
    var phone = props.props.phone;
    phone = phone.replace(/(\d{3})(\d{3})(\d{4})/,"($1)$2-$3");
    return (
        <div className="info_pub">
            { phone + ' -'}&nbsp;
            { props.props.email }
        </div>
    )
}



export default InfoPub;
export { FullName, Location, Contact }