
import React , { Component } from 'react';
import './style.css';
import CardsComponent from '../../component/cards/cards';




class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contaniner-flui bg-f9f9f9">
                <div className="container">
                    <div className="row-flex">
                        <div className="search-post-box">
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                            <CardsComponent title="تورهای زیبا"/> 
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SearchContainer;