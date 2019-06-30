import React, {Component} from 'react';
import ReactDOM from "react-dom";

import { browserHistory  } from 'react-router'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../../assets/images/001.jpg'
import image2 from '../../../assets/images/002.jpg'
import image3 from '../../../assets/images/003.jpg'
import Input from '../../../component/common/inputHeader/inputHeaderComponent';
import Button from '../../../component/common/Button/Button';
import ButtonSearch from '../../../component/common/buttonSearch/buttonSearch';
import CapacityComponent from '../../../component/common/capacity/capacityComponent'
import DatePickerComponent from '../../../component/common/datePicker/datePickerComponent';

import GetToday from '../../times/getToday';

import moment from 'moment';
import momentJalaali from 'moment-jalaali';
 



import './style.css';

// moment.locale("fa");
// momentJalaali.loadPersian();
moment.locale("fa");
class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDate :  GetToday('shamsi'),
 
         }
 
    }

    
 
    componentDidMount =() => {
        // this._openTab('hotel')
        this._openTab('shop')
       // moment.locale('fa'); // Polish 

    }


    _openTab  = (key) => {
   

         let btns = document.getElementsByClassName("sliderTab");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                    var current = document.getElementsByClassName("active-tab");
                    current[0].className = current[0].className.replace(" active-tab", "");
                    this.className += " active-tab";
                });
        }
        this.insertParam('sys',key)
    }


       //
    // insert and get params from url --------------------------------------------------------->
    //

    insertParam = async (key, value) => {
        // push params in url location query
        await browserHistory.push({
            pathname: window.location.pathname,
            query: Object.assign({}, window.location.query, { [key]: value })
        });

       
    }



    getParms(value) {

        let url_string = window.location.href
        let url = new URL(url_string);

        const val = url.searchParams.get(value);
       // // console.log(val)
        if (val !== null)
            return val;
        return 0
    }




    render() { 

        momentJalaali.loadPersian();  // >>>>>>>>>> This change locale to Persian successfully but how to change calendar system?
        moment.locale("fa");



        const renderBar = (key) =>{

            switch (key) {
                case 'hotel':
                    return  renderHotelBar
                        break;
                case 'entertainment':
                    return  renderEntertainmentBar
                        break;
                case 'shop':
                    return  renderShoplBar
                        break;
                default:
                    return renderHotelBar
                        break;
            }
        } 

        const renderHotelBar = (
            <div className="bar-container">
        
                <ul>
                    <li>  
                        <DatePickerComponent
                            placeholder="تاریخ ورود"
                            // change={(  unix, formatted , val) => this.change(unix, formatted, 'dateStart')}
                            name={'dateStart'}
                            type="date" // can be date or timestamp  defualt is timestamp
                            location={this.props.location}
                            currentDate={this.state.currentDate}
                        /> 
                    </li>
      
                    <li>
                        <DatePickerComponent
                            placeholder="تاریخ خروج"
                            // change={(  unix, formatted , val) => this.change(unix, formatted, 'dateStart')}
                            name={'dateStart'}
                            type="date" // can be date or timestamp  defualt is timestamp
                            location={this.props.location}
                        /> 
                    </li>
                    <li>
                        <CapacityComponent name="capacity" location={this.props.location} color="#ffb44b"   />
                    </li>
                    <li></li>
                    <li>
                        <ButtonSearch                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'جستجو'}                                                      
                            bgcolor={'#fcb800'}                                                 
                            hoverbgcolor={'#fcb800'}                                          
                            click={this.callSubmit} 
                            color="#fcfcfc"
                            id={'1'}
                            borderRadius={'5px'}
                        />   
                    </li>
                </ul>  
            </div>
        )

        const renderEntertainmentBar = (
            <div className="bar-container">
                <ul>
                    <li>  
                        <DatePickerComponent
                            placeholder="تاریخ ورود"
                            // change={(  unix, formatted , val) => this.change(unix, formatted, 'dateStart')}
                            name={'dateStart'}
                            type="date" // can be date or timestamp  defualt is timestamp
                            location={this.props.location}
                            currentDate={this.state.currentDate}
                        /> 
                    </li>
       
                    <li>
                        <CapacityComponent name="capacity" location={this.props.location} color="#ffb44b"   />
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>
                        <ButtonSearch                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'جستجو'}                                                      
                            bgcolor={'#fcb800'}                                                 
                            hoverbgcolor={'#fcb800'}                                          
                            click={this.callSubmit} 
                            color="#fcfcfc"
                            id={'1'}
                            borderRadius={'5px'}
                        />   
                    </li>
                </ul>    
            </div>
        )

        const renderShoplBar = (
            <div className="bar-container">
                <ul>
                    <li>  
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="جتسجو آگهی"  // title of text 
                        /> 
                    </li>
      
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="همه آگهی ها"  // title of text 
                        /> 
                    </li>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="محله"  // title of text 
                        /> 
                    </li>
                    <li>
                        <DropList  
                            name={'email'}
                            default={'انتخاب کنید'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                            data={this.state.status}
                        />
                    </li>
                    <li>
                        <ButtonSearch                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'جستجو'}                                                      
                            bgcolor={'#fcb800'}                                                 
                            hoverbgcolor={'#fcb800'}                                          
                            click={this.callSubmit} 
                            color="#fcfcfc"
                            id={'1'}
                            borderRadius={'5px'}
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
                                <li id="hotel" className="sliderTab active-tab" onClick={() => this._openTab('hotel')}>هتل</li>
                                <li id="entertainment" className="sliderTab" onClick={() => this._openTab('entertainment')}>گردشگری</li>
                                <li id="shop" className="sliderTab" onClick={() => this._openTab('shop')}>خرید و فروش</li>
                            </ul>
                        </div>
                        <div className="slider-main-container">
                            {renderBar(this.getParms('sys'))}
                        </div>

                 
                    </div>
             
             
            </div>
         );
    }
}
 
export default SliderComponent;