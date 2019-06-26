import React, {Component} from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../../assets/images/001.jpg'
import image2 from '../../../assets/images/002.jpg'
import image3 from '../../../assets/images/003.jpg'

import './style.css';


class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid   slider-custom"   >
                
                        {/* <BackgroundSlideshow images={[ image1, image2, image3 ]} className=""  /> */}
                    <div className="bg-slider">
                        <div className="slider-tab-container">
                            <ul>
                                <li>هتل</li>
                                <li>گردشگری</li>
                                <li>خرید و فروش</li>
                            </ul>
                        </div>
                    </div>
             
             
            </div>
         );
    }
}
 
export default SliderComponent;