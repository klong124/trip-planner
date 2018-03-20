const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

function generateMarker(type, coordinates) {
  //Making a DOM element that's a div
  const markerDomEl = document.createElement("div");
  const background = "url(" + iconURLs[type] + ")";

  //Styling DOM element
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = background;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = generateMarker;
