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

// Fetch GeoJSON data from GitHub
fetch('https://raw.githubusercontent.com/petrposkocil/30DayMapChallenge/main/data/map_3/rent_prices_per_city_quarter.geojson')
  .then(response => response.json())
  .then(data => {
    // Function to style polygons based on population_density
    function style(feature) {
      return {
        fillColor: colorScale(feature.properties.rent_diff),
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.7
      };
    }

    // Add GeoJSON layer with custom style
    L.geoJSON(data, { style: style }).addTo(map);
})
.catch(error => console.error('Error loading GeoJSON:', error));