if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Registraion succeeded')
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  })
}