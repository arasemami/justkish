import React , { Component } from 'react';
import './style.css';
import example from '../../../assets/images/slide1.png'

class ShopingCardsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const renderData = (
            <tr className="shpoing-card-container">
             <td>
                <h2>450.000 تومان</h2>
             </td>
             <td>
                <p>14 عدد</p>
             </td>
             <td>
                <span> تومان </span> <p>200.000</p>
             </td>
             <td>
                <h2>تور های دریایی به همراه شما</h2>
                <p>سانس 12 - 02  تاریخ 1398/02/01</p>
             </td>
             <td>
                <img src={example} alt=""    />
             </td>
            </tr>
        )
        return ( 
            <table >
                <tr className="shoping-table-header">
                    <th>مبلغ کل</th>
                    <th>تعداد</th>
                    <th>قیمت فی</th>
                    <th>محصول</th> 
                    <th></th> 
                </tr>
                {renderData}
                {renderData}
                {renderData}
            
           
           
            </table>
         );
    }
}
 
export default ShopingCardsComponent;