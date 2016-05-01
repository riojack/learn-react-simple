import React from 'react';

function renderByMode(props) {
  if (props.edit === true) {
    return <input type="text"
                  defaultValue={props.name}
                  placeholder={props.placeholder}
                  onChange={props.onChange}
    />;
  }

  return <section>{props.name}</section>;
}

class Song extends React.Component {
  render() {
    let component = renderByMode(this.props);
    return component;
  }
}

export default Song;
