let map = L.map('apMap').setView([51.1122, 4.3413], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Bepaal de rechthoek rondom het gebied in Schelle (coördinaten aanpassen aan een specifieke rechthoek als nodig)
let bounds = [[51.1125, 4.3408], [51.1119, 4.3418]];

// Kleur de rechthoek in met een kleur, bijvoorbeeld rood (#e60005)
L.rectangle(bounds, {color: "#e60005"}).addTo(map);

// Plaats een marker op Schelle met de tekst
let apMarker = L.marker([51.1122, 4.3413]).addTo(map);
apMarker.bindPopup("<b>Schelle!</b><br>Voorbeeldadres").openPopup();
