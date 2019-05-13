
import React , { Component } from 'react';
import './style.css';


class DateProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="p-m-container">
                <div className="p-m-cards ">
                    <p style={{padding: '0 10px', fontSize: '18px'}} > تاریخ</p>
                    <div className="select-data-icon count-avatar"></div>
                </div>

                <div className="p-m-cards p-m-cover-center">
                    <p>1398/02/01</p>
                </div>
              
            </div>
         );
    }
}
 
export default DateProductComponent;