import React, {Component } from 'react';

import './style.css'


import SliderComponent from '../../component/index/slider/slider';
import NewsLatterComponent from '../../component/index/newslatter/newslatterComponent';
// import FooterMenuComponent from '../../component/index/footerMenu/footerMenuComponent';
// import ContactUsComponent from '../../component/index/contactUs/contactUs';
import UnderHeaderComponent from '../../component/index/underHeader/underHeaderComponent';
import VitrinComponent from '../../component/vitrin/vitrinComponent';


import img01 from '../../assets/images/cat-01.png'
import img02 from '../../assets/images/cat-02.png'
import img03 from '../../assets/images/cat-03.png'
import img04 from '../../assets/images/cat-04.png'


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
                    <VitrinComponent image={img01} title="بهرتین های جزیره کیش" category="گردشگری" /> 
                    <VitrinComponent image={img02} title="زیباترین اقامتگاه ها" category="ویلا و اقامتگاه"/> 
                    <VitrinComponent image={img03} title="مجلل ترین هتل ها" category="رزرو هتل و مهمانخانه"/> 
                    <VitrinComponent image={img04} title="ارزانترین خطوط هوایی" category="رزرو بلیط هواپیما"/> 
                </div>
              
        

                <NewsLatterComponent /> 
 
            </div>
         );
    }
}
 
export default IndexComponent;