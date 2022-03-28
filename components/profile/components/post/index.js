import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './style.js';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Reactions from './components/reactions/index.js';
import PostHeader from './components/post_header/index.js';

const Post = props => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.post}>
      <PostHeader navigate={props.navigate} />
      <Text style={styles.postText}>Hello everyone, have a good day!</Text>
      <View style={styles.postBody}>
        <YoutubePlayer
          height={(windowWidth * 9) / 16}
          play={false}
          videoId={props.videoId}
        />
      </View>
      <Reactions navigate={props.navigate} />
    </View>
  );
};
export default Post;
