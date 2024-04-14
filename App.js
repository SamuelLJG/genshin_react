if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://genshin-react.netlify.app/sw.js')
  .then((reg) => console.log('service worker registered', reg))
  .catch((err) => console.log('service worker not registered', err))
}