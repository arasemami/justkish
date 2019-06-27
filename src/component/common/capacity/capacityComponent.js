
import React , { Component } from 'react';
import { browserHistory } from 'react-router';
import './style.css';
import Capacity from './capacity';



class CapacityComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            counter: this.props.val,
            adult:1,  
            infant:0,
            child:0,
         }
    }
    CounterPerson = React.createRef();


    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick , false)
        this._getTotalGest();

    }
    //
    //-----------------------------------------------------------------------------------------------------------------
    _setProps = async(name,val) =>{ 
        
        await this.setState({
            [name] : val
        })
        // add to url params as person --
        this.insertParam(name, val)
        // get total person for episode
        this._getTotalGest();


    }
    _getTotalGest = () => {

        let adult =   parseInt(this.state.adult)
        let child =  parseInt(this.state.child)
        let infant = parseInt(this.state.infant)
        this.setState({
            totlaGuest : adult + child + infant
        })

    }


    //
    // insert and get params from url --------------------------------------------------------->
    //

    insertParam = async (key, value) => {
        // the props.location come from import oringe component 
        // push params in url location query
        await browserHistory.push({
            pathname: this.props.location.pathname,
            query: Object.assign({}, this.props.location.query, { [key]: value })
        });
            
        // // console.log(browserHistory.getCurrentLocation())
    }

    getParms(value) {

        let url_string = window.location.href
        let url = new URL(url_string);

        const val = url.searchParams.get(value);
       // // console.log(val)
        if (val !== null)
            return val;
        return 0
    }






    _actionModal = (key) => { 

            this.CounterPerson.current.classList.add(key);
  
    }

    handleClick = (e) => {
        console.log(e.target);
    
         
        try {
            if(this.CounterPerson.current.contains(e.target))
            return;
        
        
            if(this.CounterPerson.current.classList.contains('show'))
                {
                    this.CounterPerson.current.classList.remove('show');
                    document.getElementById('arrow-down').style.display = 'block'
                    document.getElementById('arrow-close').style.display = 'none'  
                }
        } catch (error) {
            console.log(error)
        }          
        
    }


 






    render() { 
        return ( 
            <div>
                    <div className="counter-person" onClick={() => this._actionModal('show')}>
                        <span className="capacity-counter-container"  >
                            <span>نفر</span>
                            <span>{this.state.totlaGuest} </span>
                        </span>
                        <p className="counter-person-first-title">تعداد مهمان </p> 
                    </div>
                    <div className="counter-person-container" ref={this.CounterPerson}>
                        <Capacity title=" بزرگسال" name="adult" color={this.props.color}  _returnValue={this._setProps} val={this.state.adult} desc="(12 سال به بالا)" />
                        <Capacity title=" کودک" name="child" color={this.props.color}  _returnValue={this._setProps} val={this.state.child} desc="(2 سال تا 12 سال)" />
                        <Capacity title=" نوزاد" name="infant" color={this.props.color}  _returnValue={this._setProps} val={this.state.infant} desc="(10 روز تا 2 سال)" />
                    </div>
            </div>
         );
    }
}
 
export default CapacityComponent;





/*
 how can use it -------------------------

 

    <CapacityComponent 
        name="capacity" 
        location={this.props.location} 
        color="#ffb44b"   
    />


 





*/