import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import {expect} from 'chai';
import {stub} from 'sinon';
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
  });

  describe('Read-only mode', () => {
    beforeEach('Set up', () => {
      props = {
        name: chance.sentence(),
        edit: false
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

  describe('Edit mode', () => {
    beforeEach('Set up', () => {
      props = {
        name: chance.sentence(),
        edit: true,
        placeholder: chance.sentence(),
        onChange: stub()
      };

      songElement = React.createElement(Song, props);
      renderedSong = renderReactElement(songElement);
    });

    it('should be an INPUT with a type of "text"', () => {
      expect(renderedSong.type).to.equal('input');
      expect(renderedSong.props.type).to.equal('text');
    });

    it('should set the defaultValue react attribute to value of props.name', () => {
      expect(renderedSong.props.defaultValue).to.equal(props.name);
    });

    it('should set the placeholder attribute to the value of props.placeholder', () => {
      expect(renderedSong.props.placeholder).to.equal(props.placeholder);
    });

    it('should map the onChange handler to props.onChange', () => {
      expect(renderedSong.props.onChange).to.equal(props.onChange);
    });
  });
});
