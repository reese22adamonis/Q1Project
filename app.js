$(document).ready(function(){

	$('#searchbutton').click(function(){


		var city = $("#city").val();

		if (city != ''){

			$.ajax({


				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=bbb1a4bf1cca06d619e92a55e2d01993",  
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);

					$("#show").html(widget);

					$("#city").val('');

					var curWea = data["weather"][0]["description"];
					console.log(curWea)
					if(curWea === 'light rain'){
						

						$('body').css('background-image', 'url("./images/rain.jpeg")');
						
					}

						if(curWea === 'scattered clouds'){
						

						$('body').css('background-image', 'url("./images/clouds.jpeg")');
						


														}
							if(curWea === 'few clouds'){
													

							$('body').css('background-image', 'url("./images/clouds.jpeg")');
													


														}

									if(curWea === 'broken clouds'){
									

									$('body').css('background-image', 'url("./images/clouds.jpeg")');
									


																	}

											if(curWea === 'clear sky'){
											

											$('body').css('background-image', 'url("./images/clear.jpeg")');
											


																			}


													if(curWea === 'shower rain'){
													

													$('body').css('background-image', 'url("./images/rain.jpeg")');
													


																				}

															if(curWea === 'thunderstorm'){
															

															$('body').css('background-image', 'url("./images/lightning.jpeg")');
															


																						}



															if(curWea === 'mist'){
															

															$('body').css('background-image', 'url("./images/mist.jpeg")');
															


																						}


																	if(curWea === 'moderate rain'){
																	

																	$('body').css('background-image', 'url("./images/rain.jpeg")');
																	


																								}























				}

			})




		}else{
			$("#error").html('Field cannot be empty')
		}




	});


});


function show(data){
	return 		"<h2>Weather for " + data.name + ", " + data.sys.country +"</h2>" +
				"<h3><strong>Weather</strong>: "+ data.weather[0].main +" </h3>" +
			 	"<h3><strong></strong> <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon  +".png'> "+ data.weather[0].description +
			 	"<h3><strong>Temp</strong>: "+ data.main.temp+" F </h3>" +
			 	"<h3><strong>Humidity</strong>: "+ data.main.humidity +" %</h3>" +
			 	"<h3><strong>Max</strong>: "+ data.main.temp_max +" F</h3>" +
			 	"<h3><strong>Min</strong>: "+ data.main.temp_min +" F </h3>" +
			 	"<h3><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h3>" +
			 	"<h3><strong>Wind Direction</strong>: "+ data.wind.deg +"  &deg</h3>";


}































