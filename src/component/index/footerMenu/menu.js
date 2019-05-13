import React, { Component } from 'react';

import './style.css';


class MenuFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col ">
                <h2>title menu</h2>
                <ul>
                    <li><a href="#" >Menu of link</a></li>
                    <li><a href="#" >Menu of link</a></li>
                    <li><a href="#" >Menu of link</a></li>
                </ul>
            </div>
         );
    }
}
 
export default MenuFooter;