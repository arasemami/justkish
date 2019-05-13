import React , { Component } from 'react';

import './style.css'; 

import img01 from '../../assets/images/cat-01.png'
import CradComponent from '../cards/cards'

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
                        <div className="col-50  " style={{backgroundColor:'#FFFFFF'}}>
                            <CradComponent title="dfsdfsdfsdf"/> 
                            <CradComponent title="dfsdfsdfsdf"/> 
                            <CradComponent title="dfsdfsdfsdf"/> 
                            <CradComponent title="dfsdfsdfsdf"/> 
                        </div>
                        <div className="col-30 bg-black vitrin-image-container"> 
                            <h1>{this.props.title}</h1>
                            <img src={this.props.image} alt="" className="vitrin-image"  />
                           
                        </div>
                        <div className="col-20 bg-red">
                            <h2>{this.props.category}</h2>
                            <ul>
                                <li>تفریحات دریایی</li>
                                <li>کشتی های تفریحی</li>
                                <li>مجموعه های تفریحی</li>
                                <li>اجاره خودرو</li>
                                <li>جنگ و کنسرت</li>
                                <li>رستوران و کافی شاپ</li>
                                <li>پیشنهاد های ویژه</li>
                            </ul>
                        </div>

                    </div>
               </div>
            </div>
         );
    }
}
 
export default VitrinComponent;