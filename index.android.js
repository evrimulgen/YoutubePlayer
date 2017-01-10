/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView
} from 'react-native';

var DEFAULT_URL = 'https://www.youtube.com/';

export default class YoutubePlayer extends Component {

  render() {
    return (
      <WebView
     source={{uri: DEFAULT_URL}}
     style={{marginTop: 20}}
   />
    );
  }
}


AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
