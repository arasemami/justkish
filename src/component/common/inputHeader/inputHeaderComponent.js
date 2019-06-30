import React from 'react';

import './Input.css';


// inputRef = React.createRef()








const InputHeaderComponent = (props) => {

    const handleFocus = (props) =>{ 
        document.getElementById(props.name).focus();
    }
    
    return (
            <div className="input-fix-container">
                <p>{props.labelTop}</p>  
                <div className="Inputbox-header"> 
                <input    type={props.type}
                          onClick={props.clicked} 
                          placeholder=" "
                          onChange={props.changed}
                          name={props.name}
                          required
                          maxLength={props.max}
                          style={{color:props.color}}  
                          id={props.name}
                          value={props.val}
                          readOnly={props.readonly} 
                          />
                <p className="input-label">{props.label}</p> 

        </div>
            </div>
    )
}




export default InputHeaderComponent;


/*
example using 

      <Input 
            type={'text'} 
            name={'email'}
            placeholder={'Email'}
            changed={this.changedHandler}
            error={this.state.forgetEmailError} // if you want show error pass error text to this props
            label="lable"  // title of text
            labelTop="&nbsp;" // etxra space 
        />


           

                        


*/