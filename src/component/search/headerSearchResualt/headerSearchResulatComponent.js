import React, { Component } from 'react';
import './style.css';
import InputFix from '../../common/inputHeader/inputHeaderComponent';



class HeaderSearchResualt extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header-search-resualt">
                <ul>
                    <li>
                        <p>قیمت</p>
                        <div className="search-resualt-price-container">
                        <InputFix 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="از"  // title of text 
                        />
                        <InputFix 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تا"  // title of text 
                        />
                        </div>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <p>sdsd</p>
            </div>
         );
    }
}
 
export default HeaderSearchResualt;