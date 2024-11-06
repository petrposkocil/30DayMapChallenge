// Create a map centered on Germany
var map = L.map('map').setView([52.5200, 13.4050], 10); // Coordinates for Germany

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//Legend
const legendTitle = 'Rent Difference between 2008 and 2022 [EUR/m²]';

// Example of recalculated breakpoints
const breakpoints = [0, 0.96, 2.6, 4.310, 6.310, 8.490, 12.100]; // Rent difference ranges
const colors = ['','#fff5f0', '#fdbea5', '#fc7050', '#d42020', '#67000d']; // Corresponding colors

// Layer groups for toggling
let polygonLayer;  // To store the polygon layer

// Create a layer control object
const overlayMaps = {};  // Empty at first, will be populated later

// Function to determine the color based on the breakpoints
function getColor(rentDiff) {
  if (rentDiff === -999) {
    return 'rgba(0, 0, 0, 0)'; // Fully transparent color
  }
  
  for (let i = 0; i < breakpoints.length - 1; i++) {
      if (rentDiff >= breakpoints[i] && rentDiff < breakpoints[i + 1]) {
          return colors[i];
      }
  }
  return colors[colors.length - 1]; // Return last color if rentDiff exceeds all breakpoints
};

// Function to style polygons based on rent_diff (with the new breakpoints and colors)
function style(feature) {
  const rentDiff = feature.properties.rent_diff;
  return {
      fillColor: getColor(rentDiff), // Apply color from getColor function
      weight: 2,
      opacity: 1,
      color: 'black', // Border color
      fillOpacity: 0.6 // Transparency of fill color
  };
};

// Function to create a legend for the map
function createLegend() {
  var legend = L.control({ position: 'topright' });

  legend.onAdd = function() {
      var div = L.DomUtil.create('div', 'legend');
      div.innerHTML += '<strong>' + legendTitle + '</strong><br>'; // Use the variable for the legend title

      // Add no data to the legend
      div.innerHTML += '<i style="background: rgba(0, 0, 0, 0)"></i>NA<br>';

      // Loop through the breakpoints and create a color swatch for each
      for (let i = 0; i < breakpoints.length - 1; i++) {
          div.innerHTML +=
              '<i style="background:' + colors[i] + '"></i> ' +
              breakpoints[i] + ' - ' + breakpoints[i + 1] + '<br>';
      }

      // Add entry for the line
      div.innerHTML += '<br><i style="background: none; border: 2px dashed #FFEA00; display: inline-block; width: 20px; height: 1px;"></i> Ring-Bahn (Train)<br>';

      return div;
  };

  legend.addTo(map);
};

// Fetch GeoJSON data from GitHub (Polygons)
fetch('https://raw.githubusercontent.com/petrposkocil/30DayMapChallenge/main/data/map_3/rent_prices_per_city_quarter_4326.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with custom style
        // L.geoJSON(data, { style: style }).addTo(map);

        polygonLayer = L.geoJSON(data, { style: style });
        polygonLayer.addTo(map);  // Add polygon layer initially visible
        overlayMaps["Polygon Layer"] = polygonLayer;  // Add to overlayMaps for toggling

        // Now add the layer control with the polygon layer available
        L.control.layers(null, overlayMaps, { collapsed: false, position: 'bottomright' }).addTo(map);


    })
    .catch(error => console.error('Error loading GeoJSON:', error));

// Create a custom pane for lines with a high z-index
map.createPane('topLines');
map.getPane('topLines').style.zIndex = 800; // Higher than the default overlay pane

// Style for LineString features (simple uniform color)
const lineStyle = {
  pane: 'topLines',
  color: "#FFEA00",     // Line color
  weight: 2,            // Line thickness
  opacity: 1,         // Line opacity
  dashArray: "5, 5"     // Dashed pattern (5px line, 5px gap)
};

// Fetch the GeoJSON file containing multiple LineString features
fetch('https://raw.githubusercontent.com/petrposkocil/30DayMapChallenge/main/data/map_3/S_Bahn_Ring_4326.geojson')
    .then(response => response.json())
    .then(lineData => {
        // Add GeoJSON layer with custom line style to the map
        L.geoJSON(lineData, { style: lineStyle }).addTo(map);
    })
    .catch(error => console.error('Error loading line GeoJSON:', error));

// Create the legend and add it to the map
createLegend();