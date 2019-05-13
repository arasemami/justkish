import React , { Component} from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router';

import './style.css';



class EmptyShoping extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div>
                <div className="icon-empty-shoping"></div>
                <h1>سبد خرید شما خالی میباشد</h1>
                <p>میتوانید برای مشاهده تفریحات، هتل، بلیت هواپیما، و دیگر خدمات به صفحه زیر بروید</p>
                <br />
                <Link to="/">
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'بازگشت به فروشگاه'}                                                      
                        bgcolor={'#fcb800'}                                                 
                        hoverbgcolor={'#fcb800'}                                          
                        click={this.callSubmit}
                        borderRadius="10px"
                        color="#fff"
                        id={'1'}
                        width={'50%'}
                        borderRadius={'500px'}
                    />  
                </Link>
            </div>



         );
    }
}
 
export default EmptyShoping;