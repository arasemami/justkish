
import React , { Component } from 'react';
import './style.css';
import CardsComponent from '../../../component/cards/cards';
import HeaderSearchResualt from '../../../component/search/headerSearchResualt/headerSearchResulatComponent';




class SearchHtelContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid bg-f9f9f9">
          
                <div className="container">
                    {/* <HeaderSearchResualt /> */}
                    <div className="row-flex">
                        <div className="search-post-box">
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                            <CardsComponent title="تورهای زیبا" /> 
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SearchHtelContainer;