import React , { Component } from 'react';
import Button from '../../component/common/Button/Button';
import { Link } from 'react-router';
import ShowEmptyShoping from '../../component/shopingBag/emptyShop/emptyShop';
import ShopingCards from '../../component/shopingBag/shopingCards/shpoingCardsComponent';


import './style.css';


class ShopingBag extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return ( 
            <div className="container-fluid bg-f9f9f9">
                <div className="container p-10">
                    <div className="shoping-container">
                        {/* <ShowEmptyShoping /> */}
                        <ShopingCards /> 
                    </div>
                   
                </div>
            </div>
         );
    }
}
 
export default ShopingBag;