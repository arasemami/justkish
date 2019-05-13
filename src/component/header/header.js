import React, { Component } from 'react';
import { Link } from 'react-router';

//
//
//
import logo from './../../assets/images/logo.png'
import './style.css';
import shopingCard from '../../assets/icons/shoping-card.svg'


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openHumberger: false
        }
    }


    menuTablet = React.createRef()

    openHumberger = (e) => {
        this.setState((prevState) => {
            return {
                openHumberger: !prevState.openHumberger
            }
        })
        if (!this.state.openHumberger) {
            this.menuTablet.current.className = 'headerMenuDown'
        } else {
            this.menuTablet.current.className = 'headerMenuUp'

        }
    }


    _callLogin =() => {
        
    }

    render() {

        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']
        if (this.state.openHumberger) {
            line1 = ['lineX line1move']
            line2 = ['lineX line2move']
            line3 = ['lineX line3move']
        } else {
            line1 = ['line line1']
            line2 = ['line line2']
            line3 = ['line line3']
        }

        return (
            <div className="header">
              <div className="container-fluid header-up" >
                    <div className="container" >
                        <div className="header-up-left">
                            <ul>
                                <li >
                                    <div className="icon-phone"></div>
                                    <span>+9891234520</span>
                                </li>
                                <li className="border-left-navbar">پنل آژانس ها</li>
                                   
                            </ul>
                        </div>
                        <div className="header-up-right">
                            <ul>
                                <li >مشاور املاک</li>
                                <li className="border-left-navbar">صرافی</li>
                                <li className="border-left-navbar">خرید و فروش</li>
                                <li className="border-left-navbar">مشاغل</li>
                                <li className="border-left-navbar">رستوران</li>
                                <li className="border-left-navbar">بلیط هواپیما</li>
                                <li className="border-left-navbar">هتل</li>
                                <li className="border-left-navbar">اجاره ویلا</li>
                                <li className="border-left-navbar">گردشگری</li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
  {/* responsive header up ---------------------------------------------------------> */}
                <div className="container-fluid header-up-responsive" >
                    <div className="container ">
                        <ul>
                            
                            <li>
                                <a href="#">پنل آژانس ها</a>
                            </li>
                                
                        </ul>
                        <div>
                            <div className="custom-select"  >
                                <select name="cars">
                                    <option value="audi">گردشگری</option>
                                    <option value="audi">اجاره ویلا</option>
                                    <option value="audi">هتل</option>
                                    <option value="audi">بلیط هواپیما</option>
                                    <option value="audi">رستوران</option>
                                    <option value="audi">مشاغل</option>
                                    <option value="fiat">خرید و فروش</option>
                                    <option value="saab">صرافی</option>
                                    <option value="volvo">مشاور املاک</option>
                                </select>
                            </div>
                 
                        </div>
                    
                    </div>
                </div>

{/* 
                
                <div className="container-fluid" >
                    <div className="container" >

                        <div className="menuTablet" >
                            <div className="headerMenuUp" ref={this.menuTablet}  >

                                <div className="shoping-navbar">
                                    <div className="shoping-back-number">
                                        <span>2</span>
                                    </div>
                                </div>
                                <a href="http://www.dashboard.vishar.com/login" className="menu-login" onClick={this._callLogin}>
                                    <p className="menu-login-text">ورود و عضویت</p>
                                </a>

                                <div className="nav-bar-search">
                                    <p>earch</p>
                                </div>
                            </div>
                            

                            <div className="hamburger" onClick={(e) => this.openHumberger(e)} ref={this.humberger}>
                                <span className={line1.join(' ')}></span>
                                <span className={line2.join(' ')} ></span>
                                <span className={line3.join(' ')} ></span>
                            </div>
                            <div className="header-logo" >
                                <Link to="/" ><img src={logo} alt="لوگو" style={{height:'45px'}} /></Link>
                            </div>
                        </div>
                    </div>
                </div> */}


                           
                <div className="container-fluid" >
                    <div className="container" >
                        <div className="navbar">
                            <div className="left">
                               <Link to="shoping">
                                    <div className="shoping-navbar">
                                        <div className="shoping-back-number">
                                            <span>2</span>
                                        </div>
                                    </div>
                                </Link>
                                {/* <div  className="menu-login"  >
                                    <Link to="/login"  className="menu-login-text">ورود و عضویت  <div className="header-avatar-btn"></div></Link>
                                  
                                </div> */}

                                <div  className="menu-login"  >
                                    <Link to="/profile"  className="menu-login-text">حساب کاربری من <div className="header-avatar-btn"></div></Link>
                                  
                                </div>


                            </div>
                            <div className="center">
                                <div className="btn-search-navbar">
                                   <Link to="/search">
                                        <span className="txt-search-navbar">جستجو</span>
                                        <span className="icon-search-navbar">W</span>
                                   </Link>
                                </div>
                                <input type="text" placeholder="جستجو کنید . . ." />
                            </div>
                            <div className="right">
                                <div className="header-logo" >
                                    <Link to="/" ><img src={logo} alt="لوگو" style={{height:'40px'}} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid header-down" >
                    <div className="container" >
                        
                            <ul>
                                <li>hisdsd</li>
                                <li>hisdsd</li>
                                <li>hisdsd</li>
                                <li>hisdsd</li>
                                <li>hisdsd</li>
                            </ul>
                       
                    </div>
                </div>





            </div>
        );
    }
}

export default HeaderComponent;