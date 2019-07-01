import React, { Component } from 'react';
import './style.css';


class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    radiohandler =async (event) => { 
        await this.setState({
             [event.target.name]: event.target.value
         }); 
         if(event.target.value === false) {
              
         }
     }


    render() { 
        return ( 
            <div className="switch-container">
                <label className="switch">
                    <input 
                        type="checkbox"  
                        name="powerup" 
                        checked={this.state.powerup}   
                        onChange={(e) => {
                            this.radiohandler({
                                target: {
                                name: e.target.name,
                                value: e.target.checked,
                                }
                            });
                            }} 
                    
                    />
                    <span className="slider round"></span>  
                </label>
                <p className="switch-label">{this.props.label}</p>
            </div>
         );
    }
}
 
export default SwitchComponent;