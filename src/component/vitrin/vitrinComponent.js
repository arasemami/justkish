import React , { Component } from 'react';

import './style.css'; 

import img01 from '../../assets/images/cat-01.png'

class VitrinComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
               <div className="container">
                    <div className="row vitrin">
                        <div className="col-50  bg-yellow "></div>
                        <div className="col-30 bg-black vitrin-image-container"> 
                            <h1>بـــهترین هــای جزیره زیبای کیش</h1>
                            <img src={img01} alt="" className="vitrin-image"  />
                           
                        </div>
                        <div className="col-20 bg-red">
                            <h2>گردشگری و تفریحی</h2>
                            <ul>
                                <li>menu</li>
                                <li>menu</li>
                                <li>menu</li>
                                <li>menu</li>
                                <li>menu</li>
                                <li>menu</li>
                                <li>menu</li>
                            </ul>
                        </div>

                    </div>
               </div>
            </div>
         );
    }
}
 
export default VitrinComponent;