// a weather dashboard with form inputs
// I search for a city
// I am presented with current and future conditions for that city and that city is added to the search history
// I view current weather conditions for that city
// city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// I view the UV index
// I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// I view future weather conditions for that city
// I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// I click on a city in the search history
// I am again presented with current and future conditions for that city

//var queryULR = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=ca3f3f9f43059d883eb797661b422921"

//Value of the input
let city = $("#searchTerm").val();

//API Key
const apiKey ="ca3f3f9f43059d883eb797661b422921"

let date = new Date();

$("#searchTerm").keypress(function(event){

    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
})

$("#searchBtn").on("click", function() {

    $("#forecast").addClass("show");

    // input from user
    city = $("#searchTerm").val();

    //clear input box
    $("#searchTerm").val("");
})

