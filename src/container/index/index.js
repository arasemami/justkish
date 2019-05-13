import React, {Component } from 'react';

import './style.css'


import HeaderComponent from '../../component/header/header';
import SliderComponent from '../../component/index/slider/slider';
import LineBorderComponent from '../../component/index/lineBorder/lineBorder';
import VitrinComponent from '../../component/index/vitrin/vitrinComponent';
import NewsLatterComponent from '../../component/index/newslatter/newslatterComponent';
import FooterMenuComponent from '../../component/index/footerMenu/footerMenuComponent';
import ContactUsComponent from '../../component/index/contactUs/contactUs';
import UnderHeaderComponent from '../../component/index/underHeader/underHeaderComponent';


class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div> 
                <SliderComponent /> 
                <UnderHeaderComponent />
                <div style={{backgroundColor:'#F4F5F5'}}>
                <LineBorderComponent  title="تورهای تفریحی"/>
                <VitrinComponent />
                </div>
              
        

                <NewsLatterComponent /> 
 
            </div>
         );
    }
}
 
export default IndexComponent;