import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom'

import './style.css';


class DashboardSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dashboard-menu-right">
                <ul>
                    <li>
                        <Link   to="/profile" activeclassname="active" >
                            پروفایل من
                        </Link>
                    </li>
                    <li>بلیط ها</li>
                    <li>بلیط های بازگشتی</li> 
                    <li>سفارشات من</li>
                    <li>سبد خرید</li>
                    <li>خروج</li>

                </ul>
            </div>
         );
    }
}
 
export default DashboardSideMenu;