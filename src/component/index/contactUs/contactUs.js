import React , { Component } from 'react';
import './style.css';
import ContactUsMessageFormComponent from './contactUsMessageForm';


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid footer-container">
                <div className="container footer-mes" >
                    <div className="row-flex">
                        <div className="col">
                            <ContactUsMessageFormComponent />
                        </div>
                        <div className="col">
                            <h2 style={{textAlign:'center'}}>نشانی جاست کیش</h2>
                            <div style={{textAlign:'right'}}>
                                <h3>دفتر فروش</h3>
                                <p>خیابان بستامی واحد ۱</p>
                                <p>تلفن تماس:+982154877</p>
                                <br />
                                <h3>دفتر پشتیبانی</h3> 
                                <p>جزیره زیبای کیش ُ خیابان امیر کبیر ُ ساختمان رویال مال ُ واخد۲</p>
                                <p>تلفن تماس:+982154877</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default ContactUsComponent;