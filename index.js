import anime from 'animejs/lib/anime.es.js';

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
  },
  // // Disable preloading of all images
  preloadImages: true,
  // // Enable lazy loading
  lazy: true,
  mousewheel: true,
  keyboard: true,
  // effect: 'cube',
  // simulateTouch: false,
  // threshold: 20,
  loop: false,
})

mySwiper.on('reachEnd', function() {
  // initMap()
})

 function initMap() {
  !function(){
		var infoWindow, map, level = 18,
			center = {lng: 113.95544, lat: 35.048037},
			features = [{type: "Marker", name: "天美大酒店(解放路)", desc: "原阳县南干道工会对面", color: "red", icon: "flg", offset: {x: -12, y: -26}, lnglat: {lng: 113.95544, lat: 35.048037}}];

		function loadFeatures(){
			for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
				data = features[i];
				switch(data.type){
					case "Marker":
						feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
							zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
							content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' });
						break;
					case "Polyline":
						for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
						}
						feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
							strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
						break;
					case "Polygon":
						for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
						}
						feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
							strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
							fillColor: data.fillColor, fillOpacity: data.fillOpacity });
						break;
					default: feature = null;
				}
				if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); }
			}
		}

		function mapFeatureClick(e){
			if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true}); }
			var extData = e.target.getExtData();
      infoWindow.setContent("<h5>" + "天美大酒店" + "</h5><div>" + "原阳县南干道工会对面" + "</div>");
      console.log(e, e.lnglat)
			infoWindow.open(map, features[0].lnglat);
		}

		map = new AMap.Map("amap", {center: new AMap.LngLat(center.lng, center.lat), level: level});
		
		loadFeatures();

		map.on('complete', function(){
			map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function(){
				map.addControl(new AMap.ToolBar);
			map.addControl(new AMap.OverView);
			map.addControl(new AMap.Scale);
			});	
		})
	}();
 }
