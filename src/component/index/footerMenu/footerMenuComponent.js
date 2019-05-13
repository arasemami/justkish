import React , { Component } from 'react';


import './style.css';
import MenuFooter from './menu';


class FooterMenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid" style={{ borderBottom: '1px solid #E1E1E1'}}>
                <div className="container">
                    <div className="row-flex menu-footer-container">
                        <MenuFooter />
                        <MenuFooter />
                        <MenuFooter />
                        <MenuFooter />
                        <MenuFooter />
                        <MenuFooter />
                        <MenuFooter />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FooterMenuComponent;