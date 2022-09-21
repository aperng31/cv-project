import React from 'react';
import ReactDOM from 'react-dom/client';
import { FullName, Location, Contact } from './info-pub.js'
import './info.css'

class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            address: "",
            city: "",
            state: "",
            phone: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ fullname: e.target[0].value,
                        address: e.target[1].value, 
                        city: e.target[2].value, 
                        state: e.target[3].value,
                        phone: e.target[4].value,
                        email: e.target[5].value   
                        });
        console.log('submit');
        const info_form = document.querySelectorAll('.info_form')

        info_form.forEach((node) => node.hidden = true)
        const info_pub = document.querySelectorAll('.info_pub');
        info_pub.forEach((node) => node.hidden = false);

        const info_submit = document.querySelector('#info_submit');
        info_submit.style.display = 'none';
        const info_edit = document.querySelector('#info_edit');
        info_edit.style.display = 'block';
    }

    editForm = () => {
        const info_form = document.querySelectorAll('.info_form')
        info_form.forEach((node) => node.hidden = false)
        const info_pub = document.querySelectorAll('.info_pub');
        info_pub.forEach((node) => node.hidden = true);
        console.log('edit');

        const info_submit = document.querySelector('#info_submit');
        info_submit.style.display = 'block';
        const info_edit = document.querySelector('#info_edit');
        info_edit.style.display = 'none';
    }

    render() {
        return (
            <div id="info_main">
                <form id="form1" onSubmit = {this.handleSubmit}>
                    <div id="div_fullname">
                        <input className="info_form" id="fullname" type="text" name="fullname" placeholder='Bob Smith' required></input>
                        <FullName props={ this.state } />
                    </div>

                    <div id="div_location">
                        <input className="info_form" id="address" type="text" name="address" placeholder='1234 Main Ave' style={{ width: '200px' }} required></input>
                        <input className="info_form" id="city" type="city" name="city" placeholder='Ipsumville' required></input>
                        <input className="info_form" id="state" type="text" name="state" placeholder='CA' maxLength="2" style={{ width: '20px' }} required
                            onKeyPress={(event) => {
                                if (!/[A-z]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }}>
                        </input>

                        <Location props={ this.state } />
                    </div>

                    <div id="div_contact">
                        <input className="info_form" id="phone" type="text" name="phone" placeholder='1234567890' maxLength="10" required
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }}>
                          </input>

                        <input className="info_form" id="email" type="email" name="email" placeholder='hello@gmail.com' required></input>

                        <Contact props={ this.state } />
                    </div>
                    <button id="info_submit" className="submit_edit" type="submit" value="Submit"></button>
                    <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input>
                    <hr></hr>
                </form>
            </div>
        )

        
    }
}

export default Info