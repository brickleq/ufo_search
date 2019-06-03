// from data.js
var tableData = data;

// YOUR CODE HERE!
// ok, here goes...

function buildFullTable() { // Build table with all data from data.js
  var table = document.getElementById("ufo-table"); // Find <table> element with id="ufo-table"
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
    // Populate the new cells with data from current data.js object:
    var objectData = tableData[i-1];
    cell1.innerHTML = objectData.datetime;
    cell2.innerHTML = objectData.city;
    cell3.innerHTML = objectData.state;
    cell4.innerHTML = objectData.country;
    cell5.innerHTML = objectData.shape;
    cell6.innerHTML = objectData.durationMinutes;
    cell7.innerHTML = objectData.comments;
  }
}

function handleSubmit() { // Submit Button handler
    d3.event.preventDefault(); // Prevent the page from refreshing
    var dateInput = d3.select("#datetime").node().value; // Select the input value from the form
    console.log(dateInput); // log user input
    d3.select("#datetime").node().value = ""; // clear the input value
    var filteredTableData = filterByDate(dateInput); // Call function to filter by selected date
    buildFilteredTable;
  }

function clearTable() {
    var table = document.getElementById("ufo-table);
    for (i = 1; i < (table.length + 1); i++) {
      table.deleteRow(i);
    }
  }
  
function filterByDate(dateInput) {
  var newTableData = tableData.filter(function(value, index, arr) {
    return value[0] == dateInput;
  }

function buildFilteredTable {
  
}
buildFullTable;
d3.select("#filter-btn").on("click", handleSubmit);