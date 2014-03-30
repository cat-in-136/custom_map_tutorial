// The Original Code is "custom map template using OSM Leaflet".
//

window.addEventListener("load", function () {
  document.getElementById("map_canvas").innerHTML = "";
  var map = L.map("map_canvas", {
    center: [85.0511287798066,-180],
    zoom: 17,
    zoomControl: false
  });

  L.tileLayer("../tile/custom_map_tile_{y}_{x}.png", {
    minZoom: 17,
    maxZoom: 17,
    noWrap: true,
    attribution: "&#169; " + "＿地図製作者＿".link("http://example.com/＿地図製作者のページへのリンク＿"),
  }).addTo(map);
}, false);
