/* installatioin 

npm install --save react-advance-jalaali-datepicker

*/

import React , { Component } from 'react';

import './style.css';
import {  DatePicker } from "react-advance-jalaali-datepicker";


 





class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


  

    DatePickerInput(props) {
        return <input className="popo" {...props} />;
      }
   
     componentWillMount(){

        this.setState({
            currentDate: '12/12/1397'
        })
     }


         //
    // date picker selector funcation ---------------------------------------------- 
    change = (unix, formatted, val) => { 
        this.insertParam(val,formatted);  // insert date shamsi
    }





    render() { 
        const handleFocus = (props) =>{ 
            document.getElementById(props.name).focus();
        }

        return ( 
            <div  className="date-picer-container ">
             
                <div className="date-picer-input ">
                     <div className="date-picker-component">
                        <DatePicker
                                format="jYYYY/jMM/jDD"
                                onChange={this.change}  
                                inputComponent={this.DatePickerInput}
                                placeholder={this.props.currentDate}
                                id={this.props.name}
                                preSelected={this.props.currentDate}  
                                cancelOnBackgroundClick={true}
                                // controllValue={true}
                           
                            />
                     </div>
                     <span className="date-picker-span-label"   onClick={()=> handleFocus(this.props)}>{this.props.placeholder }</span>
                    </div>
            </div>
         );
    }
}
 
export default DatePickerComponent;


/*
example using 

   
                        <DatePickerComponent
                            placeholder="تاریخ شروع"
                            change={(  unix, formatted , val) => this.change(unix, formatted, 'dateStart')}
                            name={'dateStart'}
                        />


*/