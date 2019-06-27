import React from 'react';
import Radium from 'radium'
import './style.css';

const ButtonSearchComponent = (props) => (
    <div  className="button-box" id={props.id} >
        <button className="button-style"  
                onClick={props.click} 
                style={{backgroundColor : props.bgcolor , 
                        ':hover' : {opacity : '0.8'} ,
                        borderRadius: props.borderRadius ,
                        color:props.color,
                        fontSize:'16px'} } >
                    {props.isLoading ? (
                        <div  className="loader-button"></div>
                    ) : (
                            props.title
                    )}
                
        </button>

    </div>
);

export default Radium(ButtonSearchComponent);



/*
=====================================================================================
How can use this button : ------->                                                  
                                                                                    
                                                                                    
             <Button                                                                  
                    isLoading={this.state.isLoading}                                    
                    title={'Send'}                                                      
                    bgcolor={'#fcb800'}                                                 
                    hoverbgcolor={'#fcb800'}                                          
                    click={this.callSubmit}
                    borderRadius="10px"
                    color="#fff"
                    id={'1'}
                    width={'100%'}
                    borderRadius={'500px'}
                />                                          
                                                                                    
                                                                                    
=====================================================================================

*/