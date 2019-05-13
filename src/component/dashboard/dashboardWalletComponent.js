import React , { Component } from 'react';

import './style.css';


class DashboardWalletComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dashboard-menu-right">
            <div className="dashboard-profile-container row-flex ">
                <div className="dashboard-profile-container-wallet">
                    <h2>آراس آرمانی</h2>
                    <p><span style={{fontSize:'12px'}}>مبلغ کیف پول</span> <span style={{fontSize:'18px', color:'#54C971'}}>3000000</span> <span style={{fontSize:'8px', color:'#54C971'}}>تومان</span></p>
                </div>

                <div className="dashboard-profile-container-avatar">
                    <div className="dashboard-avatar"></div>
                </div>
             
            </div>
        </div>   
        );
    }
}
 
export default DashboardWalletComponent;