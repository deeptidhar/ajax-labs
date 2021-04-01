"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
        // we use .html instead of .text here because we want the response to 
        // be given back to us in html instead of ignoring the code
    })
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info
    // weather = request.args.get("zipcode") --- something we can do in Python (flask)
    
    // .get - go to this route; it's making a request to this route
    // formData - give these key:value pairs to the designated route
    // callback is contained after (response) through {}
    // => - fat arrow function - syntax for defining a function, simply
    // callback function - function we're passing to another function; the other function will call it
    // In this, we're defining a function that takes in a parameter called response
    // we're passing the logic we determined should be done to jQuery's .get method
    $.get('/weather.json', formData, (response) => {
        alert(`The forecast is ${response.forecast}`);
    }
    )}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

// function orderMelons(evt) {
//     evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

$('#order-form').on('submit', (evt) => {
    evt.preventDefault();

    const formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val()
      };

    $.post('/order-melons.json', formInputs, (response) => {
        $('#order-status').text(response.msg);
    
        if ('qty' > 10) {
            console.log(response.code, response.msg);
        }
        else if ('qty' > 0) {
            console.log
                (response.code, response.msg)
        }
        else {
            console.log(response.code, response.msg)
            };
    })
});