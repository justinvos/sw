import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

function notify(title, body) {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification(title, {
          body: body,
          icon: '',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: ''
        });
      });
    }
  });
}

function degreesToRadians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function distanceBetween(positionA, positionB) {
    var R = 6371e3; // metres
    var radLatA = degreesToRadians(positionA.latitude);
    var radLatB = degreesToRadians(positionB.latitude);
    var deltaLat = degreesToRadians(positionB.latitude-positionA.latitude);
    var deltaLon = degreesToRadians(positionB.longitude-positionA.longitude);

    var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
            Math.cos(deltaLat) * Math.cos(deltaLat) *
            Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Registraion succeeded')
    notify("Notification Title", "Test body")
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  })
}

console.log("index.js loaded")

/*
var posA = {
    latitude: -36.708,
    longitude: 174.662
}

 
var posB = {
    latitude: -36.742,
    longitude: 174.670
}

console.log(distanceBetween(posA, posB))
*/