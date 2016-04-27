import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import {expect} from 'chai';
import Chance from 'chance';

import Song from '../src/Song';

function renderReactElement(reactElement) {
  var renderer = ReactTestUtils.createRenderer();
  renderer.render(reactElement);

  return renderer.getRenderOutput();
}

describe('Song component tests', () => {
  let songElement,
    renderedSong,
    chance,
    props;

  beforeEach('Set up', () => {
    chance = new Chance();

    props = {
      name: chance.sentence()
    };

    songElement = React.createElement(Song, props);
    renderedSong = renderReactElement(songElement);
  });

  it('should be a SECTION', () => {
    expect(renderedSong.type).to.equal('section');
  });

  it('should add props.name inside the component', function () {
    expect(renderedSong.props.children).to.equal(props.name);
  });
});
