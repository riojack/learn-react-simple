import React from 'react';

class Song extends React.Component {
  render() {
    const {name} = this.props;
    return <section>{name}</section>;
  }
}

export default Song;
