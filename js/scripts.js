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

$('#getZip').click(function() {
  $('.form').hide("slow");


  event.preventDefault();

  var zipcode = $('#getWeather').val();
  console.log(zipcode);

  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {

      var temp = weather.temp;
      var city = weather.city;
      var state = weather.region;
      var text = weather.text;
      var current = weather.currently;
      var high = weather.high;
      var low = weather.low;
      var sunrise = weather.sunrise;
      var sunset = weather.sunset;
      var updated = weather.updated;
      var code = weather.code;

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

      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});
