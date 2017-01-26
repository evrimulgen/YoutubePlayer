import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import YouTube from 'react-native-youtube';

export default class YouTubePlaylist extends Component {

  constructor(props) {
    super(props);
    this.state = { playlist: [] };
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then(response => console.log(response.data.items));
  }

  renderPlaylist() {
      return (
        <YouTube
          videoID={this.state.playlist.id}
          apiKey='yourApiKey'
          play={false}
          controls={0}
        />
      );
  }

  render() {
    return (
      <ScrollView>{this.renderPlaylist()}</ScrollView>
    );
  }
}
