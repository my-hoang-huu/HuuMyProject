import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './style.js';
import {Text, View, Dimensions} from 'react-native';
import Reactions from './components/reactions/index.js';
import PostHeader from './components/post_header/index.js';

const Post = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.post}>
      <PostHeader />
      <Text style={styles.postText}>Hello everyone, have a good day!</Text>
      <View style={styles.postBody}>
        <YoutubePlayer
          height={(windowWidth * 9) / 16}
          play={false}
          videoId={'nPt8bK2gbaU'}
        />
      </View>
      <Reactions />
    </View>
  );
};
export default Post;
