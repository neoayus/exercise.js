// QUESTION 03
// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// initialise Date object. 
let currentDate = new Date() ; 


// get date, month and year values. 
let date = currentDate.getDate() ; 
let month = currentDate.getMonth() ;
let year = currentDate.getYear() ; 

// dk why i need this but i do 
year = year-100 ;

// add leading 0's 
date = (date < 10)? '0' + date : date ; 
month = (month < 10)? '0' + month : month ; 
year = (year < 10)? '0' + year : year ; 

// print date in various formats
console.log(month,"/",date,"/",year) ; 
console.log(date,"/",month,"/",year) ; 

