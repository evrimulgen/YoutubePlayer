/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import YouTube from 'react-native-youtube';

export default class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: true,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      playlist: [],
      currentID: 0,
      text: null
    };
  }


  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then((response) => response.json())
    .then((responseData) => this.updatePlaylist(responseData))
    .catch((error) => {
        console.error(error);
      });
    console.log('Will Mount');
    console.log(this.state.playlist);
    this.state.text = this.props.text;
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then((response) => response.json())
    .then((responseData) => this.updatePlaylist(responseData))
    .catch((error) => {
        console.error(error);
      });
    console.log('Did Mount');
    console.log(this.state.playlist);
  }

  shouldComponentUpdate() {
      return true;
  }

  onNextPressed = () => {
    this.state.currentID++;
    if (this.state.currentID >= this.state.playlist.items.length) {
      this.state.currentID = 0;
    }
    console.log('Current ID:');
    console.log(this.state.currentID);
    this.forceUpdate();
  };

  onBackPressed = () => {
    this.state.currentID--;
    if (this.state.currentID < 0) {
      this.state.currentID = this.state.playlist.items.length - 1;
    }
    console.log('Current ID:');
    console.log(this.state.currentID);
    this.forceUpdate();
  };

  updatePlaylist(playlist) {
    this.setState({ playlist });
    //console.log('UpdatePlaylist');
    //console.log(playlist);
  }

  render() {
    //console.log('Render');
    //console.log(this.state.playlist);
    return (
      <View style={styles.container}>

        <YouTube
          videoId={this.state.playlist.items == null ? 'KVZ-P-ZI6W4' : this.props.videoID}
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
  toolBar: {
    flexDirection: 'row',
  },
  toolBarButton: {
    width: 50,
    textAlign: 'center',
  }
});
