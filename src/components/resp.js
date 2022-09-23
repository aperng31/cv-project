import React from 'react';
import './education.css';

class Resp extends React.Component {


    render() {
        return (
            <div>
                { this.props.props.resp_form.map((resp, resp_ind) =>  {
                    return (
                        <div>
                            <input id={"resp"+resp_ind} type="text" placeholder='Add responsibility'></input>

                            <button type="button" onClick={ () => { this.props.rem(resp_ind) } }>Delete</button>
                            {/* </input> */}
                        </div> 
                        )
                    }) 
                }
                    
                {/* forEach resp in resp, return input type text for string */}
            </div>

        )
        
    }
}

export default Resp;