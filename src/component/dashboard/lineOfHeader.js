
import React , { Component } from 'react';
import './style.css';

class LineOfHeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="line-of-header-container">
                <h2>{this.props.title}</h2>
                <hr />
            </div>
         );
    }
}
 
export default LineOfHeaderComponent;