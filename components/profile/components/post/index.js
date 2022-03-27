import React from 'react';
// import Entypo from 'react-native-vector-icons/Entypo';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './style.js';
import {TouchableOpacity, Image, Text, View, Modal} from 'react-native';
import Reactions from './components/reactions/index.js';
// import PostFloatingMenu from './../header/components/floating_menu/index.js';
// import PostHeader from './components/post_header/index';
import PostHeader from './components/post_header/index.js';

const Post = () => {
  return (
    <View style={styles.post}>
      <PostHeader />
      <Text style={styles.postText}>Hello everyone, have a good day!</Text>
      <View style={styles.postBody}>
        <YoutubePlayer height={280} play={false} videoId={'nPt8bK2gbaU'} />
      </View>
      <Reactions />
      {/* <PostFloatingMenu /> */}
    </View>
  );
};
export default Post;
