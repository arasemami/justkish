import React, { Component } from 'react';
import './style.css';

import PluseMinusComponent from './pluseMinus/pluseMinusComponent';


class CountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.myRef = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this)
    }


    focusTextInput = (val) =>  {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        //this.myRef.current.classList.add('invisible')
        // if(this.myRef.current.classList.length > 2)
        //     this.myRef.current.classList.remove('invisible')
        // else
        //     this.myRef.current.classList.add('invisible')
        // console.log(this.myRef.current.classList.length)
       
        if(val === "enter"){
            this.myRef.current.style.display = 'block'
        }
        else if (val ==="leave"){
            this.myRef.current.style.display = 'none'
        }
        
      }



    render() { 
        return ( 
            <div className="count-container" onMouseLeave={() => this.focusTextInput("leave")}>
              <div className="count-container-text" onMouseEnter={() => this.focusTextInput("enter")}  >
                <div className="count-avatar"></div>
                <samn style={{padding: '0 10px', fontSize: '18px'}}> تعداد </samn>
                <span className="count-input-style">1 نفر</span>
              </div>

                <div ref={this.myRef} className="count-over-container  ">
                    <PluseMinusComponent title="بزرگسال" name="" desc="(12 سال به بالا)" />
                    <PluseMinusComponent title="کودک" name=""  desc="(2 سال تا 12 سال)"/>
                    <PluseMinusComponent title="نوزاد" name="" desc="(10 روز تا 2 سال)" /> 
                </div>
            </div>
         );
    }
}
 
export default CountComponent;