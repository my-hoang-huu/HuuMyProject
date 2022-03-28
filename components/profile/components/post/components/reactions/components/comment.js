import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import color from './../../../../../../../contains/colors';
import styles from './../style.js';
import Fontisto from 'react-native-vector-icons/Fontisto';

function Comment(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigate('Comments')}
      style={styles.commentButton}>
      <Fontisto name="comment" size={26} color={color.blackLightColor} />
      <Text style={styles.commentNumber}>432</Text>
    </TouchableOpacity>
  );
}

export default Comment;
