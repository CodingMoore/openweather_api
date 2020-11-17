import $ from 'jquery';                                    //general imports
import 'bootstrap';                                        //general imports
import 'bootstrap/dist/css/bootstrap.min.css';             //general imports
import './css/styles.css';                                 //general imports

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();                      //getting user input
    $('#location').val("");                                 //getting user input

    let promise = new Promise(function(resolve, reject) {   //creates new instance of a Promise
      let request = new XMLHttpRequest();                   //creates new instance of an XMLHttpRequest 
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;  //sets API endpoint to a convenient cariable

      request.onload = function() {                        //Defines the Resolve/Reject parameters for when we make our API call
        if (this.status === 200) {                         //
          resolve(request.response);                       //
        } else {                                           //
          reject(request.response);                        //
        }                                                  //
      };                                                   
      request.open("GET", url, true);                      //initializing (creating) a new request with parameters. "Get" is the general type of request.  We are trying to GET information.  "url" was defined above. Set "True" if you want the request to be handled asynchronously.
      request.send();                                      //sends request to server
    });

    promise.then(function(response){                                                      //This function defines what happens when we either resolve or reject the response from the server.  The resolve function is listed first, and the reject function is listed second.  They are separated by a comma.
      const body = JSON.parse(response);                                                 //resolved action
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);      //resolved action
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);   //resolved action
      $('.showErrors').text('');                                                         //resolved action
    }, function(error) {                                                             
      $('.showErrors').text(`There was an error processing your request: ${error}`);     //reject action
      $('.showHumidity').text('');                                                       //reject action
      $('.showTemp').text('');                                                           //reject action
    });

  });
});