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
            <div className="switch-card-container">
                <SwitchComponent ame="two" label="آگهی های ویژه"/>
                <SwitchComponent ame="one" label="عکس دار"/>
            </div>
         );
    }
}
 
export default SpecialSearchComponent;