import React from 'react';
import WorkObj from './workObj';
import './education.css';

class WorkPub extends React.Component {

    constructor() {
        super()
        this.showForm = this.showForm.bind(this);
        this.submitEdit = this.submitEdit.bind(this)
        this.myRef = React.createRef();
        this.pub_main = React.createRef();

    }
    showForm = () => {
        const myEditForm = this.myRef.current;
        const myPub = this.pub_main.current;
        myEditForm.style.display = 'block';
        myPub.style.display = 'none';
    }
    submitEdit = (e, newObj) => {
        const myEditForm = this.myRef.current;
        const myPub = this.pub_main.current;
        myEditForm.style.display = 'none';
        myPub.style.display = 'block';
        this.props.edit(e, newObj);
    }

    render() {
        const myProps = this.props.props;
        return (
            <div className='pub_main'>
                <div ref={this.pub_main} className='edu_pub'>
                    <div className='edu_left'>
                        <div> { myProps.company } </div>
                        <div> { myProps.role } </div>
                    </div>
                    <div className='edu_right'>   
                        <div> { myProps.city }&nbsp;{ myProps.state } </div>
                        <div> { myProps.start + '-' + myProps.finish } </div>
                    </div>
                    <div style={{width: "95%", paddingLeft: "10px", marginTop: "10px"}}> {myProps.description} </div>
{/* 
                    <ul>
                        { elem.resps.map(resp => {
                            return (
                                <li key={ resp.key }>
                                    { resp.text }
                                </li>
                            )
                        })}
                    </ul> */}
                    <button id="edit_work" className='edu_button edit_button' onClick={ () => this.showForm() } style={{right: '10px', top: '0px'}}></button>
                    <button id="delete_work" className='edu_button delete_button' onClick={ () => this.props.del(myProps.key) } style={{right: '10px', bottom: '0px'}}></button>
                </div>
                <div ref={this.myRef} className='edit_pub' style={{ display:'none' }}>
                    <WorkObj props={myProps} submit={ this.submitEdit }/>
                </div>
{/* <button id="edu_submit" type="submit" value="Submit"></button> */}
{/* <input type="button" alt="pencil" id="info_edit" className="submit_edit" style={{display: 'none'}} onClick={ this.editForm }></input> */}
            </div>
        )
    }

}

export default WorkPub

// {/* <form id={"work_form" + elem.ind} onSubmit = { (e) => this.props.edit(e, elem.ind)} style={{display: 'none'}} >
//                                 <div className="edu_left">
//                                     <input className="edu_form" id={"work_company"+elem.ind} type="text" name="company" placeholder="Company" defaultValue={elem.company} required></input>
//                                     <input className="edu_form" id={"work_role"+elem.ind} type="text" name="role" placeholder="Engineer" defaultValue={elem.role} required></input>

//                                 </div>

//                                 <div className="edu_right">
//                                     <div id="div_workLoc" className='div_Loc'>
//                                         <label>City, State: </label>
//                                         <input className="edu_form" id={"work_city"+elem.ind} type="text" name="city" placeholder='Ipsumville' defaultValue={elem.city} required></input>
//                                         <input className="edu_form" id={"work_state"+elem.ind} type="text" name="state" placeholder='CA' maxLength="2" defaultValue={elem.state} style={{ width: '24px' }} required
//                                             onKeyPress={(event) => {
//                                                 if (!/[A-z]/.test(event.key)) {
//                                                 event.preventDefault();
//                                                 }
//                                             }}>
//                                         </input>

//                                         {/* <Location props={ this.state } /> */}
//                                     </div>

//                                     <div id="div_work_start">
//                                         <label>Start: </label>
//                                         <input className="edu_form" id={"work_start"+elem.ind} type="month" name="work_start" defaultValue={elem.start}  required></input>
            
//                                     </div>
//                                     <div id="div_work_end">
//                                         <label name="work_current">If current: </label>
//                                         <input id={"work_current"+elem.ind} type="checkbox" onClick={ (e) => this.props.current(e, elem.ind) }></input>
//                                         <label>End: </label>
//                                         <input className="edu_form" id={"work_end"+elem.ind} type="month" name="work_end" required></input>
//                                         {/* add if will current there */}
//                                     </div>
//                                 </div>

//                                 <ul>
//                                     <li>
                                        
//                                     </li>
//                                     { elem.resps.map((resp, resp_ind) => {
//                                         return (
//                                             <li key={resp.key} id={'edit_resp' + resp_ind}>
//                                                 <input id={"resp"+elem.ind+resp_ind} type="text" placeholder='Add responsibility' defaultValue={ resp.text } onInput={ (e) => console.log(e.target.value) }></input>

//                                                 <button type="button" onClick={ () => { } }>Delete</button>
//                                                 {/* </input> */}
//                                             </li> 
//                                         )})
//                                     }
//                                 </ul> */}