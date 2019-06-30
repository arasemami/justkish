import React from 'react';

import './style.css';
import iconArrow from '../../../assets/icons/arrow-down.svg'
// inputRef = React.createRef()








const DropListComponent = (props) => {

    const handleFocus = (props) =>{ 
        document.getElementById(props.name).focus();
    }

    const renderOption = (
      props.data ? props.data.map((data,index) => { 
     return   <option key={index} value={data.key}>{data.val}</option>
      }) :   <option value="No Item" >No Item</option> 
    )
    
    return (
        <div className="Inputbox">
            <p className="input-compinent-label">{props.label}</p>
            <div  className="input-label">
               <img src={iconArrow} className="droplist-arrow" alt="" />
             <select name={props.name}  onChange={props.changed}>
                <option   >{props.default}</option>
                {renderOption}
             </select>

               
               {props.error ? (  <span className="input-error-text bounceIn" >{props.error}</span> ) : (null)} 
            </div>


        </div>
    )
}




export default DropListComponent;


/*
example using 


        this.state = {

            status: [ 
                        {val:'فعال', key:'active'},
                        {val:'غیر فعال', key:'deactive'}
                    ],
        }


      <DropList  
            name={'email'}
            default={'انتخاب کنید'}
            changed={this.changedHandler}
            error={this.state.forgetEmailError} // if you want show error pass error text to this props
            label=""  // title of text 
             data={this.state.status}
        />


*/