// Create a map centered on Germany
var map = L.map('map').setView([52.5200, 13.4050], 13); // Coordinates for Germany

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'img/map-marker-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [1, -25],
    shadowSize: [41, 25]
  });



var marker1 = L.marker([52.517933, 13.4580095], {icon: greenIcon}).addTo(map).bindPopup("<strong>Rigaer Straße 94:</strong> Occupied in 1990, known for the Kadterschmiede bar with no rental contract, it symbolizes the leftist movement despite its legal status.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0086233775h-940x591.jpg' alt='Rigaer Straße 94' style='width: 100%; height: auto;'>");

var marker2 = L.marker([52.5179737, 13.4574162], {icon: greenIcon}).addTo(map).bindPopup("<strong>Liebigstraße 14:</strong> Occupied since 1990, initial rental agreements escalated into eviction proceedings in 2011 after protests, facing hostility from new tenants post-renovation.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0058877918h-940x626.jpg' alt='Liebigstraße 14' style='width: 100%; height: auto;'>");

var marker3 = L.marker([52.5180149, 13.4570508], {icon: greenIcon}).addTo(map).bindPopup("<strong>Liebigstraße 34:</strong> Occupied until 2020, it faced numerous police operations and protests, culminating in a significant eviction involving over 1,500 officers.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/10/imago0105504239h.jpg' alt='Liebigstraße 34' style='width: 100%; height: auto;'>");

var marker4 = L.marker([52.531539, 13.3995152], {icon: greenIcon}).addTo(map).bindPopup("<strong>Brunnenstraße 183:</strong> Occupied in the early 1990s, initially legalized but later evicted after lengthy court battles, now displays ‘Studio 183’.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0052769551h-2048x1256.jpg' alt='Brunnenstraße 183' style='width: 100%; height: auto;'>");

var marker5 = L.marker([52.510189056396484, 13.41960620880127], {icon: greenIcon}).addTo(map).bindPopup("<strong>Köpi:</strong> A famous squat at Köpenicker Straße 137, known for hosting leftist bands and providing free housing, despite facing evictions and ownership changes.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0052226935h-940x628.jpg' alt='Köpi' style='width: 100%; height: auto;'>");

var marker6 = L.marker([52.5288992, 13.4028556], {icon: greenIcon}).addTo(map).bindPopup("<strong>Linienstraße 206:</strong> Occupied since 1990, its grey façade contrasts with the area's affluence, embodying a political statement against gentrification.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0056178089h-940x615.jpg' alt='Linienstraße 206' style='width: 100%; height: auto;'>");

var marker7 = L.marker([52.5256864, 13.389102], {icon: greenIcon}).addTo(map).bindPopup("<strong>Tacheles:</strong> Occupied in early 1990, it became a cultural hub with various facilities but was evacuated in 2012, leading to extensive construction on the site.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0050655403h-940x611.jpg' alt='Tacheles' style='width: 100%; height: auto;'>");

var marker8 = L.marker([52.5131994, 13.4622662], {icon: greenIcon}).addTo(map).bindPopup("<strong>Mainzer Straße:</strong> Once synonymous with East Berlin squats post-reunification, this area saw numerous occupations that were quickly cleared, leaving historical traces.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0050533241h-940x607.jpg' alt='Mainzer Straße' style='width: 100%; height: auto;'>");

var marker9 = L.marker([52.5166071, 13.3234066], {icon: greenIcon}).addTo(map).bindPopup("<strong>Marchstraße 23:</strong> An alternative housing project that existed from 1989 to 1996, recognized as potentially the last occupied house in the West.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0064530492h-940x627.jpg' alt='Marchstraße 23' style='width: 100%; height: auto;'>");

var marker10 = L.marker([52.5048801, 13.3848363], {icon: greenIcon}).addTo(map).bindPopup("<strong>KuKuCK:</strong> Occupied in 1981, it hosted cultural events and political discussions but was evacuated in 1984, now part of a hotel complex.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0081145022h-940x615.jpg' alt='KuKuCK' style='width: 100%; height: auto;'>");

var marker11 = L.marker([52.501387, 13.3890261], {icon: greenIcon}).addTo(map).bindPopup("<strong>Tommy-Weisbecker-Haus:</strong> Since 1973, it has been a pivotal squat that hosts concerts and bars, named after a militant leftist, with a rich history of resistance.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0091949231h-940x627.jpg' alt='Tommy-Weisbecker-Haus' style='width: 100%; height: auto;'>");

var marker12 = L.marker([52.5035914, 13.425348], {icon: greenIcon}).addTo(map).bindPopup("<strong>Georg-von-Rauch-Haus:</strong> Occupied in 1971, it established ‘Jugendzentrum Kreuzberg e.V.’ and remains standing, celebrating its 50th anniversary in 2021.<br><img src='https://www.tip-berlin.de/wp-content/uploads/2020/06/imago0056790164h-940x625.jpg' alt='Georg-von-Rauch-Haus' style='width: 100%; height: auto;'>");
