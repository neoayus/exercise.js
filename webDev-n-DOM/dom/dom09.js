// Write a JavaScript program to count and display dropdown list items in an alert window.


function getOptions(){
    var ddl = document.querySelector("#mySelect") ;
    // text variable to hold the message : 
    var txt1 = "No. of items : ";
    var i ; 

    // getting the length of select element 
    var l = ddl.length ; 
    txt1 = txt1 + l ; 

    // looping thru each option in select element : 
    for(var i=0 ; i<l ; i++){
        txt1 = txt1 + "\n" + ddl.options[i].text ; 
        // txt1 = txt + (ddl.options[i].text); 
    }

    alert(txt1);
}
