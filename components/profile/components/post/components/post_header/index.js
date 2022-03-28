import React from 'react';
import styles from './style.js';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import ThreeDotsIcon from './components/threeDotsIcon.js';
import User from './components/user.js';

function PostHeader(props) {
  return (
    <TouchableOpacity onPress={() => props.navigate('Comments')}>
      <View style={styles.postHeader}>
        <User />
        <ThreeDotsIcon />
      </View>
    </TouchableOpacity>
  );
}

export default PostHeader;
