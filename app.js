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
				}

			})




		}else{
			$("#error").html('Field cannot be empty')
		}




	});


});

$(document).ready(function(){

	$('#searchbutton').click(function(){


		var city = $("#city").val();

		if (city != ''){

			$.ajax({


				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=bbb1a4bf1cca06d619e92a55e2d01993",  
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = three(data);

					$("#three").html(widget);

					// $("#city").val('');
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
			 	"<h3><strong>Min</strong>: "+ data.main.temp_min +" F </h3>";


}

// function PUT WHATEVER YOU WANT HERE(data){
// 	return	"<h3><strong></strong> <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon  +".png'> "+ data.weather[0].icon +" </h3>"


// }




























