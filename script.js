function insert_Row() {
    let table = document.getElementById("sampleTable");
    
    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // add new cell 
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // text for cell 
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
