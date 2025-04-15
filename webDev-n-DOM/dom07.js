// Write a JavaScript function to create a table, accept row and column numbers, and input row-column numbers as cell content (e.g. Row-0 Column-0).

function createTable(){
    var row = parseInt(window.prompt("Enter Row Number : ")) ; 
    var col = parseInt(window.prompt("Enter Column Number :")); 
    var table = document.querySelector("#myTable"); 
    
    for(var x = 0 ; x < row ; x++){
        var newRow = document.createElement("tr");

     // creating table column's/ data ; 
        for(var y = 0 ; y < col ; y++){
            var newCol = document.createElement("td"); 
            newCol.innerHTML = ("saxx");
            newRow.appendChild(newCol) ; 
        }
        table.appendChild(newRow);
    }
}