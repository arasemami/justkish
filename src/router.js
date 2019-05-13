import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect, Switch } from 'react-router';

 
import RootScreen from './root';

 import IndexScreen from './container/index/index';
 import SearchResualtScreen from './container/searchResult/searchResultComponent';
 import ProductScreen from './container/product/product';
 
 import loginScreen from './container/auth/loginComponent';
 
 import shopingScreen from './container/shopingBag/shopingBag';
 import searchScreen from './container/search/search';
 import dashboardScreen from './container/dashboard/dashboard';
 import profileScreen from './container/profile/profile';


class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Router history={browserHistory}>
           
                                       
                                     
                <Route  path="/" component={RootScreen}>
                        <IndexRoute component={IndexScreen} />                               
                        <Route path="/" component={IndexScreen} ></Route> 
                        <Route path="/index" component={IndexScreen} ></Route> 
                        <Route path="/search-result" component={SearchResualtScreen} ></Route> 
                        <Route path="/product" component={ProductScreen} ></Route> 

                        <Route path="/login" component={loginScreen} ></Route> 

                        <Route path="/shoping" component={shopingScreen} ></Route> 
                        <Route path="/search" component={searchScreen} ></Route> 
                        <Route path="/dashboard" component={dashboardScreen} ></Route> 
                        <Route path="/profile" component={profileScreen}   ></Route> 
                </Route>    
                                
                               



            </Router>
        );
    }
}

export default RouterComponent;