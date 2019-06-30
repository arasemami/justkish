/*

https://github.com/jalaali/jalaali-js

*/



import jalaali from 'jalaali-js';

// jalaali.toJalaali(2016, 4, 11)

function DateMiladi(val){
    
  
        if(val !=='' && val !== null && val !== undefined){
            
            let dd = val.split('/'); 
            let dateJalaly = jalaali.toGregorian(parseInt(dd[0],10), parseInt(dd[1],10), parseInt(dd[2],10));

            return  dateJalaly.gy + '/' +  dateJalaly.gm + '/' +  dateJalaly.gd
        } 
        return 'No Value'
    
            
  
}
 


export default DateMiladi;