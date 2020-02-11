// from data.js
var tableData = data;


// YOUR CODE HERE!

console.log(tableData.length)

tableData.forEach(function(entry){

    trow = d3.select("tbody").append("tr");
 
    trow.html(`  <td>${entry.datetime}</td>
                 <td>${entry.city}</td>
                 <td>${entry.state}</td>
                 <td>${entry.country}</td>
                 <td>${entry.shape}</td>
                 <td>${entry.durationMinutes}</td>
                 <td>${entry.comments}</td>`)
 
 });

filterBtn = d3.select("#filter-btn");

filterBtn.on("click",function(event){

    filterConditions = {};

    d3.select("tbody").html("");

    datetimeFilter = d3.select("#datetime").property("value");
    if (datetimeFilter != ""){
        filterConditions.datetime = datetimeFilter;
        console.log(datetimeFilter);
        console.log(filterConditions);
    };
    cityFilter = d3.select("#city").property("value");
    if (cityFilter != ""){
        filterConditions.city = cityFilter.toLowerCase();
        console.log(cityFilter);
        console.log(filterConditions);
    };
    stateFilter = d3.select("#state").property("value");
    if (stateFilter != ""){
        filterConditions.state = stateFilter.toLowerCase();
        console.log(stateFilter);
        console.log(filterConditions);
    };
    var e = document.getElementById("country");
	var countryFilter = e.options[e.selectedIndex].text;
    if (countryFilter != ""){
        filterConditions.country = countryFilter.toLowerCase();
        console.log(countryFilter);
        console.log(filterConditions);
    };
    shapeFilter = d3.select("#shape").property("value");
    if (shapeFilter != ""){
        filterConditions.shape = shapeFilter.toLowerCase();
        console.log(shapeFilter);
        console.log(filterConditions);
    };

    console.log(filterConditions);

//    filterConditionsKeys = Object.keys(filterConditions);
//    console.log(filterConditionsKeys);

//    filterConditionsValues = Object.values(filterConditions);
//    console.log(filterConditionsValues);

    filteredData = tableData.filter(function (entry){

        for(key in filterConditions){

            console.log(`key: ${key}`);

            if(entry[key] === undefined || entry[key] != filterConditions[key])
            return false;
        }
        return true;
    });
    
    console.log(filteredData);

    filteredData.forEach(function(entry){

        trow = d3.select("tbody").append("tr");
     
        trow.html(`  <td>${entry.datetime}</td>
                     <td>${entry.city}</td>
                     <td>${entry.state}</td>
                     <td>${entry.country}</td>
                     <td>${entry.shape}</td>
                     <td>${entry.durationMinutes}</td>
                     <td>${entry.comments}</td>`)
     
     });
});







