/* installatioin 

npm install --save react-advance-jalaali-datepicker

*/

import React , { Component } from 'react';
import { browserHistory } from 'react-router';
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
    change = (unix, formatted, name , type) => { 
        if(type === 'date')
            return this.insertParam(name,formatted);  // insert date shamsi
        return this.insertParam(name,unix);
    }
 

    //
    // insert and get params from url --------------------------------------------------------->
    insertParam = async (key, value) => {
        // push params in url location query
        await browserHistory.push({
            pathname: this.props.location.pathname,
            query: Object.assign({}, this.props.location.query, { [key]: value })
        });

       
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
                                onChange={(  unix, formatted ) => this.change(unix, formatted, this.props.name, this.props.type)}  
                                inputComponent={this.DatePickerInput}
                                placeholder={this.props.currentDate}
                                id={this.props.name}
                                preSelected={this.props.currentDate}  
                                cancelOnBackgroundClick={true}
                                typeResult={this.props.type}
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
                            name={'dateStart'}
                            type="date" // can be date or timestamp  defualt is timestamp
                        />


*/