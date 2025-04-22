// Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
// Sample link and text :

var boldItems ; 
window.onload = ()=>{
    boldItems = document.getElementsByTagName('b'); 
};

function highlight(){
    for(var x=0 ; x<boldItems.length ; x++){
        boldItems[x].style.color = "green";
    }
}

var para = document.getElementsByTagName('p')[0] ; 
para.addEventListener('mouseover', ()=>{
    highlight();
})

para.addEventListener('mouseleave', ()=>{
    for(var x=0 ; x<boldItems.length ; x++){
        boldItems[x].style.color = "black";
    }
}) 