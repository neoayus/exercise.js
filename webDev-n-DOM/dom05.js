// Write a JavaScript function to add rows to a table (in attached file)

var table = document.querySelector("#sampleTable");

function createEmptyRow(){
    // create a row 
    var row = document.createElement('tr');

    // crate two table data's
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    
    // fill random values in td 
    td1.innerHTML = 'random01' ; 
    td2.innerHTML = 'random02' ; 
    
    // add those tabledata to row 
    row.appendChild(td1) ; 
    row.appendChild(td2) ; 
    return row ; 
}

//  insert row 
function insert_Row(){
    table.appendChild(createEmptyRow()) ; 
}

//////////////////////////////////////////////////
function insert_Row()
{
    var x=document.getElementById('sampleTable').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML="New Cell1";
    z.innerHTML="New Cell2";
}
