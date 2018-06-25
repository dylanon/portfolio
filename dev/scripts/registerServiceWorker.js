export default () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => {
        console.log(
          'Service worker registered. Turn off Internet access and reload the page 😎'
        );
      })
      .catch(err => {
        console.warn("This browser doesn't support service workers 😢");
      });
  }
};
