// Write a JavaScript program to calculate sphere volume.
// Sample Output of the form : 

var calc = document.querySelector("#calc") ;

calc.addEventListener('click', (event)=>{
    event.preventDefault() ; 
    var radius = document.querySelector("#rad") ;
    var volume = document.querySelector("#vol") ;

    var r = parseFloat(radius.value);                                                                                                                                                                                                                                                                                                                                                                                            ; 
    v = 33 ; 
    volume.value = (4/3) * Math.PI * Math.pow(r, 3) ; 
    console.log(v) ;
})
