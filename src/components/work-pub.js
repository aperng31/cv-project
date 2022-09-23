import React from 'react';
import './education.css';

class WorkPub extends React.Component {

    constructor() {
        super()
        // this.showForm = this.showForm.this;
    }

    showForm = (ind) => {
        const temp_edu_form = document.querySelector(`#work_form${ind}`);
        const edu_pub = document.querySelector(`#work_pub${ind}`);

        temp_edu_form.style.display = 'block';
        edu_pub.style.display = 'none';
    }

    render() {
        return (
            <div id='work_pub_main'>
                { this.props.props.work.map(elem => {
                    return (
                        <div className='edu_pub'>
                            <div id={"work_pub" + elem.ind }>

                                <div className='edu_left'>
                                    <div>
                                        { elem.company }
                                    </div>
                                    <div>
                                        { elem.role }             
                                    </div>

                                </div>
                                <div className='edu_right'>   
                                    <div>
                                    { elem.city }&nbsp;{ elem.state }
                                    </div>
                                    <div>
                                        
                                    </div>
                                    <div>
                                        { elem.start + '-' + elem.end }
                                    </div>

                                </div>
                                <button id="edit_work" className='edu_button' onClick={ () => this.showForm(elem.ind) } style={{right: '10px', top: '0px'}}></button>
                                <button id="delete_work" className='edu_button' onClick={ () => this.props.del(elem.ind) } style={{right: '10px', bottom: '0px'}}></button>

                            </div>
                            {/* onClick for buttons - similar to info change? within edu-pub.js */}
                        

                            <form id={"work_form" + elem.ind} onSubmit = { (e) => this.props.edit(e, elem.ind)} style={{display: 'none'}} >
                                <div className="edu_left">
                                    <input className="edu_form" id={"work_company"+elem.ind} type="text" name="company" placeholder="Company" defaultValue={elem.company} required></input>
                                    <input className="edu_form" id={"work_role"+elem.ind} type="text" name="role" placeholder="Engineer" defaultValue={elem.role} required></input>

                                </div>

                                <div className="edu_right">
                                    <div id="div_workLoc" className='div_Loc'>
                                        <label>City, State: </label>
                                        <input className="edu_form" id={"work_city"+elem.ind} type="text" name="city" placeholder='Ipsumville' defaultValue={elem.city} required></input>
                                        <input className="edu_form" id={"work_state"+elem.ind} type="text" name="state" placeholder='CA' maxLength="2" defaultValue={elem.state} style={{ width: '24px' }} required
                                            onKeyPress={(event) => {
                                                if (!/[A-z]/.test(event.key)) {
                                                event.preventDefault();
                                                }
                                            }}>
                                        </input>

                                        {/* <Location props={ this.state } /> */}
                                    </div>

                                    <div id="div_work_start">
                                        <label>Start: </label>
                                        <input className="edu_form" id={"work_start"+elem.ind} type="month" name="work_start" defaultValue={elem.start}  required></input>
            
                                    </div>
                                    <div id="div_work_end">
                                        <label name="work_current">If current: </label>
                                        <input id={"work_current"+elem.ind} type="checkbox" onClick={ (e) => this.props.current(e, elem.ind) }></input>
                                        <label>End: </label>
                                        <input className="edu_form" id={"work_end"+elem.ind} type="month" name="work_end" required></input>
                                        {/* add if will current there */}
                                    </div>
                                </div>
                                
                                <button id="work_submit" className='edu_button' type="submit" style={{right: '10px'}}></button>

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

export default WorkPub