
import React , { Component } from 'react';
import './style.css';


class PluseMinusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="p-m-container">
                <div className="p-m-cards p-m-cover">
                   <div className="p-m-btn-circle"><span>-</span></div>
                   <div className="p-m-txt-decoration">1</div>
                   <div className="p-m-btn-circle"><span>+</span></div>
                </div>
                <div className="p-m-cards ">
                    <p>{this.props.title}</p>
                    <span>{this.props.desc}</span>
                </div>
            </div>
         );
    }
}
 
export default PluseMinusComponent;