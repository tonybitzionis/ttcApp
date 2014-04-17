var ttcApp = {};//empty object 


ttcApp.init = function(){
ttcApp.getStation();
ttcApp.test();


};//end of init function
ttcApp.test = function(){

$('select.stations').change(function(e){
 		e.preventDefault();
 		ttcApp.station = $('select option:selected').val();
 		//ttcApp.getStation(station);
 		console.log(station);
		}); // end change
};//end of test function

var api_key = "89699b733d7754a3"
ttcApp.getStation = function(){
	$.ajax('http://myttc.ca/' + ttcApp.test() + '.json', {
			type:"GET",
			dataType:"jsonp",
			data:{
				api_key:ttcApp.api_key
			},
			success:function(data){
			console.log(data.stops[4].routes[0].stop_times[0].departure_time);
			}
		});//end of ajax
};//end of station function



$(function(){
	ttcApp.init();

});