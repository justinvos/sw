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
