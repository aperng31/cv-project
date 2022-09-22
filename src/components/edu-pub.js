import React from 'react';
import './education.css';

class EduPub extends React.Component {

    constructor() {
        super()
        // this.showForm = this.showForm.this;
    }

    showForm = (ind) => {
        console.log(`#edu_form${ind}`);
        const temp_edu_form = document.querySelector(`#edu_form${ind}`);
        const edu_pub = document.querySelector(`#edu_pub${ind}`);

        temp_edu_form.style.display = 'block';
        edu_pub.style.display = 'none';
    }

    render() {
        return (
            <div id='edu_pub_main'>

                { this.props.props.education.map(elem => {
                    return (
                        <div className='edu_pub'>
                            <div id={"edu_pub" + elem.ind }>

                                <div className='edu_left'>
                                    <div>
                                        { elem.school }
                                    </div>
                                    <div>
                                        { elem.major }             
                                    </div>

                                </div>
                                <div className='edu_right'>   
                                    <div>
                                    { elem.city }&nbsp;{ elem.state }
                                    </div>
                                    <div>
                                        
                                    </div>
                                    <div>
                                        { elem.graduated }
                                    </div>

                                </div>
                                <button id="edit_edu" className='edu_button' onClick={ () => this.showForm(elem.ind) } style={{right: '10px', top: '0px'}}></button>
                                <button id="delete_edu" className='edu_button' onClick={ () => this.props.del(elem.ind) } style={{right: '10px', bottom: '0px'}}></button>

                            </div>
                            {/* onClick for buttons - similar to info change? within edu-pub.js */}
                        

                            <form id={"edu_form" + elem.ind} onSubmit = { (e) => this.props.edit(e, elem.ind)} style={{display: 'none'}} >
                                <div className="edu_left">
                                    <input className="edu_form" id={"edu_school"+elem.ind} type="text" name="school" placeholder="School" defaultValue={elem.school} required></input>
                                    <input className="edu_form" id={"edu_major"+elem.ind} type="text" name="major" placeholder="Physics" defaultValue={elem.major} required></input>

                                </div>

                                <div className="edu_right">
                                    <div id="div_schoolLoc">
                                        <input className="edu_form" id={"edu_city"+elem.ind} type="text" name="city" placeholder='Ipsumville' defaultValue={elem.city} required></input>
                                        <input className="edu_form" id={"edu_state"+elem.ind} type="text" name="state" placeholder='CA' defaultValue={elem.state} maxLength="2" style={{ width: '20px' }} required
                                            onKeyPress={(event) => {
                                                if (!/[A-z]/.test(event.key)) {
                                                event.preventDefault();
                                                }
                                            }}>
                                        </input>

                                        {/* <Location props={ this.state } /> */}
                                    </div>

                                    <div id="div_graduated">
                                        <input className="edu_form" id={"edu_graduated"+elem.ind} type="month" name="graduated" defaultValue={elem.graduated} required>

                                        </input>
                                        {/* <Contact props={ this.state } /> */}
                                    </div>
                                </div>
                                
                                <button id="edu_submit" className='edu_button' type="submit" style={{right: '10px'}}></button>

                                {/* <button id="edu_submit" type="submit" value="Submit"></button> */}
                                {/* <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input> */}
                            </form>
                        </div>
                        
                        
                    )
                }) }
                {/* { this.props.props.education.map((educ) => {
                    <div>
                        { educ.school }
                        { educ.major }
                        { educ.city }
                        { educ.state }
                        { educ.graduated }
                    </div>
                    })

                } */}
            </div>

        )
    }

}

export default EduPub