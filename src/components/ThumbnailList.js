import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import ThumbnailDetail from './ThumbnailDetail';
import Header from './Header';

export default class ThumbnailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      stats: [],
      thumbnailDetails: [],
    };
  }

  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then((response) => response.json())
    .then((responseData) => this.updatethumbnailDetails(responseData.items))
    .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=VN&maxResults=5&key=AIzaSyBWcwQIPRcQAK111a4txY5DIVQk5mmc03I')
    .then((response) => response.json())
    .then((responseData) => this.updatethumbnailDetails(responseData.items))
    .catch((error) => {
        console.error(error);
      });
    this.forceUpdate();
  }

  shouldComponentUpdate() {
    return true;
  }

  updatethumbnailDetails(thumbnailDetails) {
    this.setState({ thumbnailDetails });
    //console.log('UpdatePlaylist');
    //console.log(playlist);
  }

  renderthumbnailDetails() {
      // console.log('Render Thumnails');
      // console.log(this.state.thumbnailDetails);
      if (this.state.thumbnailDetails[0] != null) {
        // console.log('Inside');
        // console.log(this.state.thumbnailDetails);
        return this.state.thumbnailDetails.map(thumbnail =>
            <ThumbnailDetail key={thumbnail.id} thumbnailDetails={thumbnail} />
        );
      }
  }

  render() {
    return (
      <ScrollView>
          <View style={{ flex: 1 }}>
            <Header headerText={'Youtube Player'} />
            {this.renderthumbnailDetails()}
          </View>
      </ScrollView>
    );
  }
}
