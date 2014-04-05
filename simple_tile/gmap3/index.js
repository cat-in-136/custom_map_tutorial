// The Original Code is "custom map template using Google Maps API v3".
//

google.maps.event.addDomListener(window, "load", function () {
  var oMapCanvas = document.getElementById("map_canvas");

  // Custom Map Tile Layer
  var customMapType = new google.maps.ImageMapType({
    name: "道路",
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    maxZoom: 17,
    minZoom: 17,
    getTileUrl: function(coordinate, zoom) {
      var x = coordinate.x >> 0;
      var y = coordinate.y >> 0;

      return "../tile/custom_map_tile_%y_%x.png"
       .replace("%x", x.toString())
       .replace("%y", y.toString());
    }
  });
  var map = new google.maps.Map(oMapCanvas, {
    zoom: customMapType.minZoom,
    center: new google.maps.LatLng(85.0511287798066,-180),
    disableDefaultUI: true,
    panControl: true,
    mapTypeId: customMapType.name
  });
  map.mapTypes.set(customMapType.name, customMapType);

  // Map tile license
  var copyrightDiv = document.createElement("div");
  copyrightDiv.style.fontSize = "10px";
  copyrightDiv.style.whiteSpace = "nowrap";
  copyrightDiv.style.padding = "0 6px";
  copyrightDiv.style.backgroundColor = "rgba(245, 245, 245, 0.70)";
  var copyrightSpan = document.createElement("span");
  copyrightSpan.setAttribute("style", "color: #444;");
  copyrightSpan.innerHTML = "地図データ &#169; " + "＿地図製作者＿".link("http://example.com/＿地図製作者のページへのリンク＿");
  copyrightDiv.appendChild(copyrightSpan);
  map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(copyrightDiv);
});
