import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import {expect} from 'chai';

import Song from '../src/Song';

function renderReactElement(reactElement) {
  var renderer = ReactTestUtils.createRenderer();
  renderer.render(reactElement);

  return renderer.getRenderOutput();
}

describe('Song component tests', () => {
  let songElement, renderedSong;

  beforeEach('Set up', () => {
    songElement = React.createElement(Song);
    renderedSong = renderReactElement(songElement);
  });

  it('should be a SECTION', () => {
    expect(renderedSong.type).to.equal('section');
  });
});
