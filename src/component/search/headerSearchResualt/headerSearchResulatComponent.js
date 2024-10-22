import React, { Component } from 'react';
import './style.css';
import InputFix from '../../common/inputHeader/inputHeaderComponent';
import DropListComponent from '../../common/dropList/droplistComponent';
import ButtonSearch from '../../common/buttonSearch/buttonSearch';
import SpecialSearchComponent from '../specialSearch/specialSearchComponent';



class HeaderSearchResualt extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header-search-resualt">
                <ul className="search-resualt-container">
                    <li className="custome-search-header">  
                        <InputFix 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="جتسجو آگهی"  // title of text 
                        /> 
                    </li>
      
                    <li>
                        <DropListComponent  
                            name={'category'}
                            default={'همه آگهی ها'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                            data={this.state.category}
                        />
                    </li>
                    <li>
                    <DropListComponent  
                            name={'location'}
                            default={'همه محله ها'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label=""  // title of text 
                            data={this.state.location}
                        />
                    </li> 
          
                </ul>  



                <ul className="search-resualt-container">
                    <li>
                        <div className="search-resualt-price-container">
                        <InputFix 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="از"  // title of text 
                            labelTop="قیمت"
                        /> 
                        <InputFix 
                            type={'text'} 
                            name={'email'}
                            placeholder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError} // if you want show error pass error text to this props
                            label="تا"  // title of text 
                            labelTop="&nbsp;"
                            
                        /> 
                        </div>
                    </li>
                    <li>
                        <p>&nbsp;</p>
                        <SpecialSearchComponent />
                    </li>
                    <li> 
                        <p>&nbsp;</p>
                        <ButtonSearch                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'جستجو'}                                                      
                            bgcolor={'#fcb800'}                                                 
                            hoverbgcolor={'#fcb800'}                                          
                            click={() => this.callSearch('hotel')} 
                            color="#fcfcfc"
                            id={'1'}
                            borderRadius={'5px'}
                        />   
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default HeaderSearchResualt;