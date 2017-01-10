/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class YoutubePlayer extends Component {
  render() {
    return (
      <WebView
     source={{uri: 'https://www.youtube.com/'}}
     style={{marginTop: 20}}
   />
    );
  }
}


AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
