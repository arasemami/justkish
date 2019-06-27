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

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';
import momentJalaali from 'moment-jalaali';
import { DateRangePicker, SingleDatePicker, 
    DayPickerRangeController , DateRangePickerWrapper } from 'react-dates';

 
 



import './style.css';

// moment.locale("fa");
// momentJalaali.loadPersian();
moment.locale("fa");
class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            startDate: momentJalaali(),
            endDate: null,
            focusedInput: "startDate"
            
            // startDate: moment.locale('fa'), 
            // endDate:moment('Sun Jan 16 2019 15:45:17 GMT+0330 (Iran Standard Time)') 
         }

         moment.locale("fa");
        //  momentJalaali().format('jYYYY/jM/jD'); 
         momentJalaali.loadPersian();
    }

    
 
    componentDidMount =() => {
        this._openTab('hotel')
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
                     

                    <DateRangePicker 
                    // date={moment}
                     // stateDateWrapper={momentJalaali(new Intl.DateTimeFormat("fa-IR"))}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId={this.state.endDate} // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    // renderMonthText={(month) => moment(month).locale('fa-IR').format('MMMM')}
                    // renderMonthText={(month) => console.log(month)} 
                    //  renderMonthText={(month) => moment.locale('fa')} 
                    // monthFormat={'DD MM YYYY'}
                        />

{/* <DateRangePicker
    startDate={this.state.startDate} //moment startDate if you have not set this property,it automatically sets to today
    endDate={this.state.endDate} //moment endDate
    onFocusChange={focusedInput => this.setState({ focusedInput })} 
    isRTL={true}
    onDatesChange={this.onDatesChange}//function set startDate and endDate
    focusedInput={this.state.focusedInput}//similar to airbnb api-open\close
    showClearDates={true}
    monthFormat={'jMMMM jYYYY'}//for persian:'jMMMM jYYYY', for english :'MMMM YYYY'
   /> */}




                    </li>
      
                    <li>
                    <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تاریخ خروج"  // title of text 
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
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تاریخ "  // title of text 
                        />  
                    </li>
                    <li>
                    <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تاریخ خروج"  // title of text 
                        />  
                    </li>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=" مهمان"  // title of text 
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
                            label="تاریخ ورود"  // title of text 
                        />  
                    </li>
                    <li>
                    <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تاریخ خروج"  // title of text 
                        />  
                    </li>
                    <li>
                        <Input 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تعداد مهمان"  // title of text 
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