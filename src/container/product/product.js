

import React, { Component } from 'react';
import './style.css';
import SweetAlert from 'sweetalert-react';
import '../../../node_modules/sweetalert/dist/sweetalert.css'

/*
 image slider ------------>
https://www.npmjs.com/package/react-alice-carousel

*/

import AliceCarousel from 'react-alice-carousel';
import "../../../node_modules/react-alice-carousel/lib/alice-carousel.css";


import imgs from '../../assets/images/sample.jpg'
import CountComponent from '../../component/product/countComponent';
import DateProductComponent from '../../component/product/dateProduct/dateProductComponent';
import Button from '../../component/common/Button/Button';
import LineBorderComponent from '../../component/index/lineBorder/lineBorder';
import VitrinComponent from '../../component/index/vitrin/vitrinComponent';

import img01 from '../../assets/images/001.jpg'
import img02 from '../../assets/images/002.jpg'
import img03 from '../../assets/images/003.jpg'
import img04 from '../../assets/images/003.jpg'
import img05 from '../../assets/images/003.jpg'
import img06 from '../../assets/images/003.jpg'
import img07 from '../../assets/images/003.jpg'

class ProductComponent extends Component {
    items = [
        <img src={img01} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img02} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img03} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img04} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img05} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img06} onDragStart={this.handleOnDragStart} className="yours-custom-class" /> ,
        <img src={img07} onDragStart={this.handleOnDragStart} className="yours-custom-class" />  
    ]

    constructor(props) {
        super(props);
        this.state = { 
                
                currentIndex: 0,
                responsive: { 1024: { items: 1 } },
                galleryItems: this.galleryItems(),
           
         }
    }




    _sansCheaking = () => {
        this.setState({ show: true })
    }

    handleOnDragStart = (e) => {
        e.preventDefault()
    }


    slideTo = (i) => this.setState({ currentIndex: i })
           
    onSlideChanged = (e) => this.setState({ currentIndex: e.item })
   
    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
   
    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
   
    thumbItem = (item, i) => <li className="alice-carousel-li" onClick={() => this.slideTo(i)}>{item} </li>
   
    galleryItems() {
      return this.items.map((i) => <h2 key={i}> {i}</h2>)
    }




    render() { 


        const Gallery = () => {
            const { galleryItems, responsive, currentIndex } = this.state


        

            return (
                    <div>
                            <AliceCarousel 
                                mouseDragEnabled ={true}  
                                autoPlay ={true}
                                fadeOutAnimation ={true}
                                playButtonEnabled={false}
                                disableAutoPlayOnAction={false}
                                items={galleryItems}
                                buttonsDisabled={true}
                                showSlideInfo={true}
                                preventEventOnTouchMove={true}
                                dotsDisabled={true}
                                autoPlayInterval={2000} 
                                slideToIndex={currentIndex}


                                
                                />

                            <ul  className="alice-carousel-ul row">{this.items.map(this.thumbItem)}</ul> 
                    </div>
            )
          }


      

        return ( 
            <div className="container-fluid bg-f9f9f9">
                <div className="container ">
                    <div className="product-header-container">
                        <div className="product-header-col product-social">
                            <div className="product-social-container"></div>
                            <div className="product-social-container"></div>
                            <div className="product-social-container"></div>
                            <div className="product-social-container"></div>
                        </div>
                        <div className="product-header-col txt-right p-10">
                            <h2> پرواز در سرزمین عشق بر فراز آبهای نیلگون</h2>
                            <p>
                                <span>آژانس آحمد فر</span>
                                <span> | </span>
                                <span>منتخب جاست کیش</span>
                                <span> | </span>
                                <span>کد محصول: 1325889710</span>
                            </p>
                        </div>
                    </div>
                    <div className="product-content-container">
                        <div className="col-50">
                            <div className="product-price-container">
                                <div className="product-price-style">
                                    <div > 
                                    <p className="product-price-first">250,000 تومان</p>
                                    <p className="product-price-secend">550,000 تومان</p>
                                    </div>
                                    <div className="product-percent ">
                                        <spna>15 ٪</spna>
                                        <div>تخیف</div>
                                    </div>
                                
                                </div>
                                <div className="product-description-container">
                                    <h2>ویژگی های پرواز در سرزمین عشق بر فراز آبهای نیلگون</h2>
                                    <p>
                                    يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .
                                    </p>
                                </div>

                                <div className="product-description-container">
                                    <h2 className="product-terms-of-use">شرایط استفاده</h2>
                                    <p>
                                    يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .يکي از معروفترين انواع تور سافاري ، تور صحرا است که موقعيت و مسير حرکت آن نقاط بياباني و صحرائي است .
                                    </p>
                                </div>


                                <div className="product-buy-btn-container">
                                    <div className="product-buy-col">
                                        <div className="product-buy-col-child">
                                            <h2 style={{color:'#54C971'}} >خرید بلیط</h2>
                                            <p>جهت خرید بلیط لطفا ابتدا تاریخ و تعداد را وارد نماید</p>
                                        </div>
                                    </div>
                                    <div className="product-buy-col">
                                        <div className="product-buy-row">
                                        <DateProductComponent /> 
                                        </div>    
                                        <div className="product-buy-row">
                                            <CountComponent />
                                        </div>

                                        {/* <DateProductComponent /> 
                                             */}
                                    </div>
                                    <div className="product-buy-col  ">
                                        <div className="product-btn-buy-container">
                                            <Button                                                                  
                                                isLoading={this.state.isLoading}                                    
                                                title={'خرید'}                                                      
                                                bgcolor={'rgb(84, 201, 113)'}                                                 
                                                hoverbgcolor={'#fcb800'}                                          
                                                click={this.callSubmit}
                                                borderRadius="10px"
                                                color="#333333"
                                                id={'1'}
                                                width={'100%'}
                                                borderRadius={'500px'}
                                            />  
                                        </div>
                                    </div> 

                                </div>
                        
                                
                            </div>
                        </div>
                        <div className="col-50">
                            <div className="product-slider-container">
                                                <Gallery />
                            </div>
                        </div>
                    </div>

                    <div className="product-same-product">

                     <div className="product-same-product-header">
                         <h2>محصولات مشابه</h2>
                     </div>
                    <VitrinComponent />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductComponent;