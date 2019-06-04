var allData = data; // from data.js

function buildTable(tableData = allData) { // Build table; default parameter includes all available data
  var table = document.getElementById("ufo-table", "tbody"); // Find <table> element with id="ufo-table"
  // Loop through each object in tableData array:
  for (i = 1; i < (tableData.length +1); i++) {
    var row = table.insertRow(i); // Create an empty <tr> element and add it to the (i)th position of the table
    // Insert new cells (<td> elements) at the 1st - 7th positions of the new <tr> element:
    var cell1 = row.insertCell(0); //datetime
    var cell2 = row.insertCell(1); //city
    var cell3 = row.insertCell(2); //state
    var cell4 = row.insertCell(3); //country
    var cell5 = row.insertCell(4); //shape
    var cell6 = row.insertCell(5); //durationMinutes
    var cell7 = row.insertCell(6); //comments
    // Populate the new cells with data from current object:
    var objectData = tableData[i-1];
    cell1.innerHTML = objectData.datetime;
    cell2.innerHTML = objectData.city;
    cell3.innerHTML = objectData.state;
    cell4.innerHTML = objectData.country;
    cell5.innerHTML = objectData.shape;
    cell6.innerHTML = objectData.durationMinutes;
    cell7.innerHTML = objectData.comments;
  }
  return;
}

function clearTable() {
 var table = document.getElementById("ufo-table");
 console.log(table);
 for (i = (document.getElementById("ufo-table").rows.length - 1); i > 0; i--) {
   table.deleteRow(i);
 }
 return;
}

function handleSubmit() { // Submit Button handler
  d3.event.preventDefault(); // Prevent the page from refreshing
  var dateInput = d3.select("#datetime").node().value; // Select the input value from the form
  console.log(dateInput); // log user input
  d3.select("#datetime").node().value = ""; // clear the input value
  var filteredData = data.filter(function(datum) {
    return datum.datetime == dateInput
  });
  console.log(filteredData);
  clearTable();
  buildTable(filteredData);
}

buildTable();
d3.select("#filter-btn").on("click", handleSubmit);