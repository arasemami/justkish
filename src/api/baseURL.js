
 //
 // Create Base URL 'API'
 //
 

 const url ='http://api.vishar.com' ;
 const versioan ='v1' ;
 const api ='api' ;

 const baseURL = url + '/' + api + '/' + versioan + '/'

 export default {
     url, 
     versioan, 
     api,

     baseURL
    };



/* How can Use It. ---------------->


import base from '../../../../api/baseURL';

console.log(base);  // http:api.example.com
console.log(base.baseURL);  // http:api.example.com
console.log(base.versioan);  // v1
console.log(base.api);  // api






*/