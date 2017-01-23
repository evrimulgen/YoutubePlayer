/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import YouTube from 'react-native-youtube';

export default class YoutubePlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: true,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      playlist: []
    };
  }

  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then((response) => response.json())
    .then((responseData) => this.setState({ playlist: responseData.items }))
    .catch((error) => {
        console.error(error);
      });
    console.log(this.state.playlist);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'YouTube Player'}
        </Text>
        <Text style={styles.instructions}>
          http://github.com/paramaggarwal/react-native-youtube
        </Text>

        <YouTube
          videoId={this.state.playlist[0].id}
          apiKey='yourApiKey'
          play={this.state.isPlaying}
          hidden={false}
          playsInline
          onReady={() => {
            this.setState({ isReady: true });
          }}
          onChangeState={(e) => {
            this.setState({ status: e.state });
          }}
          onChangeQuality={(e) => {
            this.setState({ quality: e.quality });
          }}
          onError={(e) => {
            this.setState({ error: e.error });
          }}
          style={{
            alignSelf: 'stretch',
            height: 300,
            backgroundColor: 'black',
            marginVertical: 10
          }}
        />

        <TouchableOpacity onPress={() => { this.setState((s) => { return { isPlaying: !s.isPlaying }; }); }}>
          <Text style={[styles.welcome, { color: 'blue' }]}>
          {this.state.status === 'playing' ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>
          {this.state.isReady ? 'Player is ready.' : 'Player setting up...'}
        </Text>
        <Text style={styles.instructions}>
          Status: {this.state.status}
        </Text>
        <Text style={styles.instructions}>
          Quality: {this.state.quality}
        </Text>
        <Text style={styles.instructions}>
          {this.state.error ? 'Error:  ${this.state.error} ' : ' '}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
