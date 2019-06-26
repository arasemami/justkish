import React, {Component} from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../../assets/images/001.jpg'
import image2 from '../../../assets/images/002.jpg'
import image3 from '../../../assets/images/003.jpg'
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';


import './style.css';


class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const renderHotelBar = (
            <div className="bar-container">
                <ul>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                        />  
                    </li>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                        />  
                    </li>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                        />  
                    </li>
                    <li></li>
                    <li>
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'Send'}                                                      
                        bgcolor={'#fcb800'}                                                 
                        hoverbgcolor={'#fcb800'}                                          
                        click={this.callSubmit} 
                        color="#fff"
                        id={'1'}
                        width={'250px'}
                        borderRadius={'50px'}
                    />   
                    </li>
                </ul>   

 


            </div>
        )
        return ( 
            <div className="container-fluid   slider-custom"   >
                
                        {/* <BackgroundSlideshow images={[ image1, image2, image3 ]} className=""  /> */}
                    <div className="bg-slider">
                        <div className="slider-tab-container">
                            <ul>
                                <li>هتل</li>
                                <li>گردشگری</li>
                                <li>خرید و فروش</li>
                            </ul>
                        </div>
                        <div className="slider-main-container">
                            {renderHotelBar}
                        </div>
                    </div>
             
             
            </div>
         );
    }
}
 
export default SliderComponent;