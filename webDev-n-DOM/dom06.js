// Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.

function changeContent(){
    var t = document.querySelector("#myTable");     

    // input for row and column : 
    var rownum = parseInt(window.prompt("input row number : "))-1 ; 
    var col = parseInt(window.prompt("input column number : "))-1 ; 


    // get row  
    var row = t.getElementsByTagName("tr") ;    

    // input string  
    var inputString = window.prompt("Enter a String : "); 

    //changing values  
    row[rownum].children[col].innerHTML = inputString ; 
}


//////////////////
function changeContent(){
    rn = window.prompt("Input the Row number(0,1,2)", "0");
    cn = window.prompt("Input the Column number(0,1)","0");
    content = window.prompt("Input the Cell content");  
    var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}
