
import React, { Component } from 'react';
import DashbordMenu from '../../component/dashboard/dashboardSideMenu';
import DashboardWalletComponent from '../../component/dashboard/dashboardWalletComponent';
import LineOfHeader from '../../component/dashboard/lineOfHeader';
import Input from '../../component/common/input/Input';
import Button from '../../component/common/Button/Button';

import './style.css';


class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid bg-f9f9f9">
                <div className="container row-flex">
                    <div className="dashboard-left-side">
                        <div className="dashboard-box-left ">
                            <LineOfHeader title="پروفایل من" />
                            <div className="dashboard-content">
                                <h3>اطلاعات کاربری خود در این بخش ویرایش کنید</h3>

                                <div className="dashboard-content-form">
                                    
                                    <Input 
                                        type={'text'} 
                                        name={'name'}
                                        placeholder={'نام و نام فامیل خود را فارسی واد نمایید'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                        label="نام و نام فامیلی"
                                    />
                                   <Input 
                                        type={'text'} 
                                        name={'mobile'}
                                        placeholder={'برای مثال 09123456789'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                        label="تلفن همراه"
                                    />
                                    <Input 
                                        type={'text'} 
                                        name={'tell'}
                                        placeholder={'تلفن ثابت را به همراه کد شهر وارد نمایید'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                        label="تلفن ثابت"
                                    />

                                    <Input 
                                        type={'text'} 
                                        name={'email'}
                                        placeholder={'example@example.com'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                        label="پست الکترونیک"
                                    />  
                                    <br />

                                    <Button                                                                  
                                        isLoading={this.state.isLoading}                                    
                                        title={'ثبت'}                                                      
                                        bgcolor={'#fcb800'}                                                 
                                        hoverbgcolor={'#fcb800'}                                          
                                        click={this.callSubmit} 
                                        color="#333333"
                                        id={'1'}
                                        width={'100%'}
                                        borderRadius={'500px'}
                                    /> 
                                     <br />  


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="dashboard-right-side">
                        <DashboardWalletComponent />
                        <DashbordMenu />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfileComponent;