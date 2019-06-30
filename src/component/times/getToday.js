
import MiladiToSHamsi from './dateMiladiToShamsi';
import ShamsitoMiladi from './dateShamsiToMiladi';


function getToday(mode){
    
        let today = new Date()
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 
        today = yyyy + '/' + mm + '/' + dd;
        if(mode==='shamsi')
            today = MiladiToSHamsi(today);
   
    
        return today
    
 
}

export default getToday;


/*
how can use this funcation 


import getToday from './gettodaycomponent.....';




getToday('shamsi'); // to get shamsi date

<------------------------------ miladi date --------------------------->

getToday('shamsi'); // to get miladi date




*/
 