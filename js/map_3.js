// Create a map centered on Germany
var map = L.map('map').setView([52.5200, 13.4050], 12); // Coordinates for Germany

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Color scale for population density (for example, using d3-scale)
var colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
.domain([0, 10000]); // Set the domain based on your data (min and max of population_density)

// Example of recalculated breakpoints
const breakpoints = [0.96, 2.6, 4.310, 6.310, 8.490, 12.100]; // Rent difference ranges
const colors = ['#fff5f0', '#fdbea5', '#fc7050', '#d42020', '#67000d']; // Corresponding colors

// Function to determine the color based on the breakpoints
function getColor(rentDiff) {
  for (let i = 0; i < breakpoints.length - 1; i++) {
      if (rentDiff >= breakpoints[i] && rentDiff < breakpoints[i + 1]) {
          return colors[i];
      }
  }
  return colors[colors.length - 1]; // Return last color if rentDiff exceeds all breakpoints
}

// Function to style polygons based on rent_diff (with the new breakpoints and colors)
function style(feature) {
  const rentDiff = feature.properties.rent_diff;
  return {
      fillColor: getColor(rentDiff), // Apply color from getColor function
      weight: 2,
      opacity: 1,
      color: 'black', // Border color
      fillOpacity: 0.7 // Transparency of fill color
  };
}

// Fetch GeoJSON data from GitHub
fetch('https://raw.githubusercontent.com/petrposkocil/30DayMapChallenge/main/data/map_3/rent_prices_per_city_quarter_4326.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with custom style
        L.geoJSON(data, { style: style }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));

// // Fetch GeoJSON data from GitHub
// fetch('https://raw.githubusercontent.com/petrposkocil/30DayMapChallenge/main/data/map_3/rent_prices_per_city_quarter_4326.geojson')
//   .then(response => response.json())
//   .then(data => {
//     // Function to style polygons based on population_density
//     function style(feature) {
//       return {
//         fillColor: colorScale(feature.properties.rent_diff),
//         weight: 2,
//         opacity: 1,
//         color: 'black',
//         fillOpacity: 0.6
//       };
//     }

//     // Add GeoJSON layer with custom style
//     L.geoJSON(data, { style: style }).addTo(map);
// })
// .catch(error => console.error('Error loading GeoJSON:', error));