
import React , { Component } from 'react';
import Input from '../../component/common/input/Input';
import Button from '../../component/common/Button/Button';


import './style.css';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <div className="container-fluid">
                <div className="container row-center ">
                         
                    <div className="login-container ">
                        <h1>ورود و عضویت</h1>
                        <div className="login-form">
                            <p>جهت ورود و یا عضویت ، لطفا شماره همراه خود را وارد نمایید.</p>
                            <Input 
                                type={'text'} 
                                name={'phone'}
                                placeholder={'نام و نام خوانوادگی'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            />

                            <Input 
                                type={'text'} 
                                name={'phone'}
                                placeholder={'شماره همراه'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            />

                            <Input 
                                type={'text'} 
                                name={'code'}
                                placeholder={'کد فعال سازی'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            />

                                                                                                        
                            <Button                                                                  
                                isLoading={this.state.isLoading}                                    
                                title={'ورود'}                                                      
                                bgcolor={'#fcb800'}                                                 
                                hoverbgcolor={'#fcb800'}                                          
                                click={this.callSubmit}
                                borderRadius="10px"
                                color="#fff"
                                id={'1'}
                                width={'100%'}
                                borderRadius={'500px'}
                            />  

                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default LoginComponent;