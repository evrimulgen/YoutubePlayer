/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import ThumbnailList from './src/components/ThumbnailList';
import VideoPlayer from './src/components/VideoPlayer';

export default class YoutubePlayer extends Component {

  render() {
    //console.log('Render');
    //console.log(this.state.playlist);
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={ThumbnailList} title="Trending List" initial />
          <Scene key="pageTwo" component={VideoPlayer} title="Video Player" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
