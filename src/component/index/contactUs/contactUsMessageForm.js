import React, {Component} from 'react';
import InputText from '../../common/input/Input';
import TextArea from '../../common/textarea/textarea';
import Button from '../../common/Button/Button';


import './style.css';




class ContactUsMessageFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <h2 style={{textAlign:'center'}}>تماس باما</h2>
                <InputText 
                    type={'text'} 
                    name={'email'}
                    placeholder={'پست الکترونیک'}
                    changed={this.changedHandler}
                    error={this.state.forgetEmailError} // if you want show error pass error text to this props
                />

                <TextArea 
                    type={'text'} 
                    name={'email'}
                    placeholder={'پیام شما'}
                    changed={this.changedHandler}
                    error={this.state.forgetEmailError}
                />

                <Button                                                                  
                    isLoading={this.state.isLoading}                                    
                    title={'ارسال'}                                                      
                    bgcolor={'#fcb800'}                                                 
                    hoverbgcolor={'#fcb800'}                                          
                    click={this.callSubmit}
                    borderRadius="10px"
                    color="#333333"
                    id={'1'}
                    width={'100%'}
                    borderRadius={'500px'}
                />  
               
            </div>
         );
    }
}
 
export default ContactUsMessageFormComponent;