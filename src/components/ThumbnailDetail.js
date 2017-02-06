import React from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ThumbnailDetail = ({ thumbnailDetails }) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  const playVideo = () => Actions.pageTwo({ videoID: thumbnailDetails.id });
  console.log('ThumbnailDetail:');
  console.log(thumbnailDetails.id);
  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{
            thumbnailDetails.snippet.title == null ? 'Unknown' : thumbnailDetails.snippet.title
          }
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: thumbnailDetails.snippet.thumbnails.standard.url == null ? 'https://i.ytimg.com/vi/Hzbr4jMxvBk/sddefault.jpg' : thumbnailDetails.snippet.thumbnails.standard.url }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={playVideo}>
            Play Video
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default ThumbnailDetail;
