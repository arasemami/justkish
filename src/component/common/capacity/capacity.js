
import React , { Component } from 'react';
import './style.css';


class Capacity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: this.props.val
         }
    }

    _action = (name,val) => { 
        let count = this.state.counter;
        if(val === 'plus')
            count ++
        else if(val === 'minus')
            if(count > 0)
                count --
        
        this.setState({
            counter : count
        });

        this.props._returnValue(name,count)
    }


    render() { 
        return ( 
            <div className="p-m-container">
                <div className="p-m-cards p-m-cover" >
                   <div className="p-m-btn-circle" style={{color:this.props.color, borderColor:this.props.color}}  onClick={() => this._action(this.props.name,'plus')}>
                        <span className="symbol-of-component">+</span>
                   </div>
                   <div className="p-m-txt-decoration">{this.state.counter}</div>
                    <div className="p-m-btn-circle" style={{color:this.props.color, borderColor:this.props.color}} onClick={() => this._action(this.props.name,'minus')}>
                        <span className="symbol-of-component" >-</span>
                   </div>
                </div>
                <div className="p-m-cards ">
                    <p style={{color:this.props.color}}>{this.props.title}</p> 
                    <span>{this.props.desc}</span>
                </div>
            </div>
         );
    }
}
 
export default Capacity;





/*
 how can use it -------------------------

    //
    // function to call back value from component
     _setProps = async(val) =>{
        await this.setState({
            person : val
        })
       // consol.log(val)
    }




     <CapacityComponent 
        title="title" 
        name="name" 
        _returnValue={this._setProps} 
        desc="details" 
    />






*/