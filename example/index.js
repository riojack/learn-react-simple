(function () {
  var React = require('react'),
    ReactDOM = require('react-dom'),
    Song = require('../src/Song').default;


  var container = document.createElement('div'),
    songElement = React.createElement(Song, { name: 'Hotel California' });

  ReactDOM.render(songElement, container);

  document.body.appendChild(container);
})();
