
import React, { Component } from 'react';
import DashbordMenu from '../../component/dashboard/dashboardSideMenu';
import DashboardWalletComponent from '../../component/dashboard/dashboardWalletComponent';
import LineOfHeader from '../../component/dashboard/lineOfHeader';

import './style.css';


class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid bg-f9f9f9">
                <div className="container row-flex">
                    <div className="dashboard-left-side">
                        <div className="dashboard-box-left ">
                            <LineOfHeader title="dahboard name" />

                        </div>
                    </div>
                    <div className="dashboard-right-side">
                        <DashboardWalletComponent />
                        <DashbordMenu />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DashboardComponent;