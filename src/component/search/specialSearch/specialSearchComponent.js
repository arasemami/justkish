import React, { Component } from 'react';
import './style.css';
import SwitchComponent from '../../common/switch/switchComponent';


class SpecialSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card-container">
                <SwitchComponent ame="one" label="آگهی"/>
            </div>
         );
    }
}
 
export default SpecialSearchComponent;