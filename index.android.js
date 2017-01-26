/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import ThumbnailList from './src/components/ThumbnailList';
import Header from './src/components/Header';

export default class YoutubePlayer extends Component {

  render() {
    //console.log('Render');
    //console.log(this.state.playlist);
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Youtube Player'} />
        <ThumbnailList />
      </View>
    );
  }
}

AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
