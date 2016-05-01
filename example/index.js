(function () {
  var React = require('react'),
    ReactDOM = require('react-dom'),
    Song = require('../src/Song').default;


  var songPropsForEdit = { name: 'Billie Jean', edit: true, placeholder: 'Song name', onChange: function (e) { console.log('A change happened: %s', e.nativeEvent.target.value); }},

    container = document.createElement('div'),

    songElementReadOnly = React.createElement(Song, { name: 'Hotel California', edit: false }),
    songElementEdit = React.createElement(Song, songPropsForEdit),

    simpleRoot = React.createElement('div', null, [songElementReadOnly, songElementEdit]);

  ReactDOM.render(simpleRoot, container);

  document.body.appendChild(container);
})();
