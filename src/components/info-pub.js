import React from 'react';
import './info.css'

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
            { props.props.city }&nbsp;
            { props.props.state } 
        </div>
    )
}

function Contact(props) {
    var phone = props.props.phone;
    phone = phone.replace(/(\d{3})(\d{3})(\d{4})/,"($1)$2-$3");
    return (
        <div className="info_pub">
            { phone }&nbsp;
            { props.props.email }
        </div>
    )
}

export { FullName, Location, Contact }