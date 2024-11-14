import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css
 
const WBS = [64.963051, -19.020835]; // WBS coordinates
const map = Leaflet.map('map').setView(WBS, 0); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates
 
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 5,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map

const myLocations = [
    {
      name: 'Island',
      location: [64.963051, -19.020835],
      description: 'The best island in the world'
    }
  ];

  // Add markers to the map with a popup
myLocations.forEach(location => {
    Leaflet.marker(location.location, { icon: markerIcon })
      .bindPopup(location.description)
      .addTo(map);
  });

  // Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);