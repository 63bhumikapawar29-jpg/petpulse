// ACTIVITY CHART
const ctx = document.getElementById('activityChart');

if(ctx){
new Chart(ctx, {
type: 'line',
data: {
labels: ['10 AM','11 AM','12 PM','1 PM','2 PM'],
datasets: [{
label: 'Activity Level',
data: [12,19,7,14,10],
borderColor: '#4F8EF7',
backgroundColor: 'rgba(79,142,247,0.1)',
tension: 0.4,
fill: true
}]
}
});
}

// GOOGLE MAP
let map;
let marker;

function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
center: { lat: 18.5204, lng: 73.8567 },
zoom: 13,
});

marker = new google.maps.Marker({
position: { lat: 18.5204, lng: 73.8567 },
map: map,
title: "Pet Location"
});
}

function setPetLocation(){
let newLat = 18.5300 + Math.random()/100;
let newLng = 73.8500 + Math.random()/100;

let newPosition = {lat:newLat, lng:newLng};

marker.setPosition(newPosition);
map.setCenter(newPosition);
}
