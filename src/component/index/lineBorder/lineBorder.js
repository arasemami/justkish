import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';


class LineBorderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid  " >
                <div className="container index-line-border" >
                   <div className="index-line-border-box">
                       <div className="index-see-more">
                           <Link to="/search-result">
                                <button className="index-btn-see-more" type="button">نمایش همه</button>
                           </Link>
                       </div>
                       <div>
                            <p>{this.props.title}</p>
                       </div>
                   </div>
                    <hr />
                </div>
            </div>
         );
    }
}
 
export default LineBorderComponent;