import React from 'react';
import './education.css';
import EducationObj from './educationObj';

class EduPub extends React.Component {

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
        console.log('show edit')
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
        if (myProps === undefined) {
            return null;
        }
        console.log(myProps);
        return (
            <div className='pub_main'>
                <div ref={this.pub_main} className='edu_pub'>
                    <div className='edu_left'>
                        <div> { myProps.school } </div>
                        <div> { myProps.major } </div>
                    </div>
                    <div className='edu_right'>   
                        <div> { myProps.city }&nbsp;{ myProps.state } </div>
                        <div> { myProps.graduated } </div>
                    </div>
                    <button className='edu_button edit_button' onClick={ () => this.showForm() } style={{right: '10px', top: '0'}}></button>
                    <button className='edu_button delete_button' onClick={ () => this.props.del(myProps.key) } style={{right: '10px', bottom: '0px'}}></button>   
                </div>

                <div ref={this.myRef} className='edit_pub' style={{ display:'none' }}>
                    <EducationObj props={myProps} submit={ this.submitEdit }/>
                </div>
            </div>
        )
    }
}

export default EduPub;