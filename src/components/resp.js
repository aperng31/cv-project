import React from 'react';
import './education.css';
import uniqid from "uniqid";

class Resp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resp_form: [],
        }
        this.addResp = this.addResp.bind(this);
        this.removeResp = this.removeResp.bind(this);
    }


    addResp = () => {
        let newResp = {};
        newResp.key = uniqid();
        this.setState({ resp_form: [...this.state.resp_form, newResp] })
    }   

    removeResp = (resp_ind) => {
        this.setState( prev => ({
            resp_form: prev.resp_form.slice(0, resp_ind).concat(prev.resp_form.slice(resp_ind + 1))
        }))
        //   this.setState(prevState => ({
        //     tasks: prevState.tasks.map((task, newInd) => { task.ind = newInd; return task }) 
        //   }));
        //console.log(this.state.resp_form);
    }

    updateResp = (e, ind) => {
        this.setState( { resp_form: this.state.resp_form.map((resp, tempInd) => {
            if (tempInd === ind) {
                resp.text = e.target.value;
            }
            return resp;
            })
        })
        this.props.update(this.state.resp_form);
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.resp_form.map((resp, resp_ind) => {
                        return (
                            <li key={resp.key} id={'resp' + resp_ind}>
                                <input id={"resp"+resp_ind} type="text" placeholder='Add responsibility' onInput={ (e) => this.updateResp(e, resp_ind) }></input>

                                <button type="button" onClick={ () => { this.removeResp(resp_ind) } }>Delete</button>
                                {/* </input> */}
                            </li> 
                        )})
                    }
                        
                    {/* forEach resp in resp, return input type text for string */}
                </ul>

                <button id="work_resp" className='edu_button' type="button" style={{left: '10px', top: '100%' }} onClick={ this.addResp }></button>

            </div>

        )
        
    }
}

export default Resp;