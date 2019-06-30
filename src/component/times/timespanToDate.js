function timeStamp(val,type){
    
    // if(type === 'stapm'){
        if(val !=='' && val !== null && val !== undefined){
            
            let  d =  new Date(val * 1000);
           
            return  d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate()  ;
        } 
        return 'No Value'
    
            
    // }
}
 


export default timeStamp;



/*

time stap convert time number to date 2018/01/01 like that.


use th function:>

TimeStamp(1234567891000);  must be 13 lengh 

*/