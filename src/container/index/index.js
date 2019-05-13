import React, {Component } from 'react';

import './style.css'


import SliderComponent from '../../component/index/slider/slider';
import NewsLatterComponent from '../../component/index/newslatter/newslatterComponent';
// import FooterMenuComponent from '../../component/index/footerMenu/footerMenuComponent';
// import ContactUsComponent from '../../component/index/contactUs/contactUs';
import UnderHeaderComponent from '../../component/index/underHeader/underHeaderComponent';
import VitrinComponent from '../../component/vitrin/vitrinComponent';


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
                    <VitrinComponent />
                </div>
              
        

                <NewsLatterComponent /> 
 
            </div>
         );
    }
}
 
export default IndexComponent;