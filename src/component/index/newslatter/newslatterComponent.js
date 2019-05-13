import React , { Component } from 'react';

import './style.css';


class NewsLatterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid footer-container">
                <div className="container">
                    <div className="row-flex">
                        <div className="col p-top-20">
                        
                            <div className="center">
                                <div className="btn-search-navbar">
                                    <span  >عضویت</span> 
                                </div>
                                <input type="text" placeholder="پست الکترونیک" />
                            </div>
                        </div>
                        <div className="col col-right">
                            <h1>خبرنامه جاست کیش</h1>
                            <h3>با وارد کردن ایمیل خود آخرین تخفیف های جاست کیش را دریافت کنید</h3>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NewsLatterComponent;