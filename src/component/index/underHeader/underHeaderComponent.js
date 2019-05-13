import React , { Component } from 'react';
import './style.css';

import img01 from '../../../assets/icons/startup.svg'
import img02 from '../../../assets/icons/reload.svg'
import img03 from '../../../assets/icons/shield.svg'
import img04 from '../../../assets/icons/chat.svg'


class UnderHeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container">
                   <div className="row under-header">
                        <div className="col-25  ">
                            <div className="row">
                                <div className="col-80">
                                    <h3>پشتیبانی 7/24</h3>
                                    <p>در 7 روز هفته و به صورت 24 ساعته، پاسخگوی شمایم</p>
                                </div>
                                <div className="col-20">
                                    <img src={img04} alt="" className="undermenu-image-siz" />
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-25  border-left">
                            <div className="row">
                                <div className="col-80">
                                    <h3>پرداخت امن و قابل اطمینان</h3>
                                    <p>امکان پرداخت از تمامی درگاه های بانکی کشور</p>
                                </div>
                                <div className="col-20">
                                    <img src={img03} alt="" className="undermenu-image-siz" />
                                </div>
                            </div>
                        </div>

                        <div className="col-25  border-left">
                            <div className="row">
                                <div className="col-80">
                                    <h3>بازگشت پول و کنسلی</h3>
                                    <p>قابلیت کنسل شدن بلیط و دریافت وجه از سوی ما</p>
                                </div>
                                <div className="col-20 ">
                                    <img src={img02} alt="" className="undermenu-image-siz" />
                                </div>
                            </div>
                        </div>

                        <div className="col-25 border-left ">
                            <div className="row">
                                <div className="col-80">
                                    <h3>خرید آسان و سریع</h3>
                                    <p>در سریعترین زمان به سادگی بلیط خود را دریافت کنید</p>
                                </div>
                                <div className="col-20">
                                    <img src={img01} alt="" className="undermenu-image-siz" />
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default UnderHeaderComponent;
