// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


// attempt 
// console.log("Today is : Tuesday \nCurrent time is : 10PM : 30 : 38") ;


// solution

var today = new Date() ; // gets current DNT in object. 

var day = today.getDay() ; 

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] ; 

// displayin current day
console.log("Today is : " + days[day-1]) ;

var hour = today.getHours() ; 
var minute = today.getMinutes() ; 
var second = today.getSeconds() ; 

// checkin if it's AM or PM 
var prepand = (hour >= 12) ? "PM" : "AM" ; 

hour = (hour >= 12 ) ? hour-12 : hour; // 24 to 12 H format.

// I AM NOT CHECKING FOR SPECIAL CASES HERE! 

// displayin current time
console.log("Current time : " + hour + prepand + ":" + minute + ":" + second) ; 


 