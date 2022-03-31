function locate(x,y)
{
var marker={}
var map = L.map('map').setView([x, y], 12);
accessToken = 'pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig';
theMarker = L.marker([x,y]).addTo(map); 
var mapbox=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);;
}
