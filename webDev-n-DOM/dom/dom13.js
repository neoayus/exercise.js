// Write a JavaScript program to get the window width and height (any time the window is resized). 

function getsize(){
    var h  = document.documentElement.clientHeight ;    
    var w  = document.documentElement.clientWidth ;    
    document.getElementById("display").innerHTML = ` Width : ${w} <br> Height : ${h} ` ;
}
