//Hide-Show Value Text -----------------------
$("#getWeather").focus( function() {
  if ( $(this).val()=="Enter Zip")
    $(this).val("");
});

$("#getWeather").blur( function() {
  if ( $(this).val()=="")
    $(this).val("Enter Zip");
});



    var date = new Date();
    var current_hour = date.getHours();
    console.log(current_hour);




// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('#getZip').click(function() {
  $('.form').hide("slow");

  // Stop Default
  event.preventDefault();
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  console.log(zipcode);
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get & store state
      var state = weather.region;
      // Get & store text
      var text = weather.text;
      // Get & store current weather
      var current = weather.currently;
      // Get & store high
      var high = weather.high;
      // Get & store low
      var low = weather.low;
      // Get & store sunrise
      var sunrise = weather.sunrise;
      // Get & store sunset
      var sunset = weather.sunset;
      // Get & Store Update Info
      var updated = weather.updated;
      // Get & Store Code
      var code = weather.code;
      
      // Output to hooks in HTML
      $('.temp').text(temp + "°" + "F");
      $('.city').text(city + ',' + ' ' + state);
      $('.state').text(state);
      $('.current').text("Currently: " + current);
      $('.text').text(text);
      $('.high').text("High: " + high + "°" + "F");
      $('.low').text("Low: " + low + "°" + "F");
      $('.sunrise').text(sunrise);
      $('.sunset').text(sunset);
      $('.update').text(updated);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});
