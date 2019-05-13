import React, {Component } from 'react';

import './style.css'


import HeaderComponent from '../../component/header/header';
import SliderComponent from '../../component/index/slider/slider';
import LineBorderComponent from '../../component/index/lineBorder/lineBorder';
import VitrinComponent from '../../component/index/vitrin/vitrinComponent';
import NewsLatterComponent from '../../component/index/newslatter/newslatterComponent';
import FooterMenuComponent from '../../component/index/footerMenu/footerMenuComponent';
import ContactUsComponent from '../../component/index/contactUs/contactUs';


class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div> 
                <SliderComponent />
                <LineBorderComponent  title="تورهای تفریحی"/>
                <VitrinComponent />
        

                <NewsLatterComponent />
                <FooterMenuComponent />
 
            </div>
         );
    }
}
 
export default IndexComponent;