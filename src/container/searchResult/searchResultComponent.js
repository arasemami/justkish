import React , { Component } from 'react';
import './style.css';
import CardsComponent from '../../component/cards/cards';



class SearchResualtComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container-fluid bg-f9f9f9">
               <div className="container">
                <div className="search-result-filter-box">
                    <div className="droplist-search-result">
                        <div className="custom-select"  >
                            <select name="cars">
                                <option value="audi">پرفروش ترین</option>
                                <option value="audi">جدیدترین</option> 
                                <option value="audi">ارزانترین</option> 
                                <option value="audi">گرانترین</option> 
                            </select>
                            <span>مرتب سازی بر اساس</span> 
                        </div>
                    </div>
                </div>

                <div className="row-flex">
                    <div className="search-result-post-box">
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
                    <div className="search-result-side-menu-box">
                        <div className="search-result-filter-fix droplist-search-result">
                            <h2>دیگر گروه بندی ها</h2>
                            <ul>
                                <li>سایر سایر</li>
                                <li>سایر سایر</li>
                                <li>سایر سایر</li>
                                <li>سایر سایر</li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
 
               </div>
            </div>
        );
    }
}
 
export default SearchResualtComponent
 