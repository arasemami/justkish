import React , { Component } from 'react';
import { Link } from 'react-router';


import './style.css';

import defualt from '../../assets/images/logoo1.png'


class CardsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cards-post">
                <Link to="product">
                    <div className="cards-image-box">
                        <img src={defualt} align="middle" />
                    </div>
                    <div className="cards-title">
                        <p>{this.props.title}</p>
                    </div>
                    <div className="cards-price">
                        <div className="cards-price-child">
                            <div>
                                <p style={{direction:'rtl'}}>30000</p>
                                <p  className="cards-ex-price" style={{direction:'rtl'}}> 45000</p>
                            </div>
                            <div>
                                <p style={{color:'#BBBBBB', fontSize:'12px'}}>منتخب جاست کیش</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
         );
    }
}
 
export default CardsComponent;