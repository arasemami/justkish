 






import React, { Component } from 'react';



  
import HeaderComponent from './component/header/header';
import FooterComponent from './component/index/contactUs/contactUs'

class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div >
               <header>
                <HeaderComponent />
               </header>
               
                {this.props.children}

                <footer>
                    <FooterComponent />
                </footer>

                
            </div>
        );
    }
}

export default RootComponent;