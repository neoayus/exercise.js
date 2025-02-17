// QUESTION 01 : 
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// assigning Date object. 
let today = new Date() ; 

// print Day. 
let day = today.getDay() ; 

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] ; 
console.log(`Today is ${days[day - 1]}.`) ; 

// print Time.
let hour = today.getHours() ; 
let minute = today.getMinutes() ; 
let second = today.getSeconds() ; 

// set prepand based on hour. 
let mer = (hour >=12) ? "PM" : "AM"  ; 

// set clock to 12 hour format
hour = (hour > 12) ? hour - 12 : hour ;  

console.log(`Current time is ${hour} ${mer} : ${minute} : ${second}`) ;
