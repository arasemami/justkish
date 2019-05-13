import React , { Component } from 'react';

import './style.css';
import CardsComponent from '../../cards/cards';


class VitrinComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container  ">
                    <div className="row">
                        <CardsComponent title="تورهای زیبا"/> 
                        <CardsComponent title="تورهای زیبا"/> 
                        <CardsComponent title="تورهای زیبا"/> 
                        <CardsComponent title="تورهای زیبا"/> 
                        <CardsComponent title="تورهای زیبا"/> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default VitrinComponent;