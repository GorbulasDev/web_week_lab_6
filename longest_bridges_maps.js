let longestBridgesCenterCoordinates = [40.73, -98.38]
let zoomLevel = 3 // 1 = whole world, 20 = city blocks

let map = L.map("bridge-map").setView(longestBridgesCenterCoordinates, zoomLevel)

let bridgeIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/183/183412.png',
    iconSize: [50, 50]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

bridges = [
    {"name": "Verrazano-Narrows Bridge", "span": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "span": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "span": "1158.0", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "span": "1067.0", "coordinates": [40.8517,-73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "span": "853.44", "coordinates": [47.2690,-122.5517] }
]

bridges.forEach(function(bridge) {
    let markerText = `<b>${bridge.name}</b><br>Length: ${bridge.span} meters.`
    L.marker(bridge.coordinates, {icon: bridgeIcon})
        .bindPopup(markerText)
        .addTo(map)
})
