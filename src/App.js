// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import HeaderComponent from './component/header/header';
// import SliderComponent from './component/index/slider/slider';
// import LineBorderComponent from './component/index/lineBorder/lineBorder';
// import VitrinComponent from './component/index/vitrin/vitrinComponent';
// import NewsLatterComponent from './component/index/newslatter/newslatterComponent';
// import FooterMenuComponent from './component/index/footerMenu/footerMenuComponent';
// import ContactUsComponent from './component/index/contactUs/contactUs';


// function App() {
//   return (
//     <div className="App">
//        <HeaderComponent />
//        <SliderComponent />
//        <LineBorderComponent  title="تورهای تفریحی"/>
//        <VitrinComponent />
 

//        <NewsLatterComponent />

//       <FooterMenuComponent />

//       <ContactUsComponent />


//     </div>
//   );
// }

// export default App;











import React, { Component } from 'react';
import './App.css';

import Header from './component/header/header';
import Index from '../src/container/index/index'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
      </div>
    );
  }
}

export default App;
