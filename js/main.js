$(document).ready(function(){
	var map = L.map('map-container').setView([46.855669, -121.767773], 9);
	
	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
	});

	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
	});
	
	var mapLayers = {
		"Street Map" : drawLayer,
		"Sattelite" : satLayer
	};
	
	L.control.layers(mapLayers).addTo(map);
	drawLayer.addTo(map);
	
	// 3 points of interest
	var cougarRock = L.marker([46.740946, -121.918186]);
	cougarRock.addTo(map);
	
	var reflectionLake = L.marker([46.769683, -121.730270]);
	reflectionLake.addTo(map);
	
	var sprayPark = L.marker([46.915509, -121.824484]);
	sprayPark.addTo(map);
});