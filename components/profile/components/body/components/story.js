import React from 'react';
import styles from '../style.js';

import {TouchableOpacity, Image} from 'react-native';

function Story(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigate('Story')}
      style={styles.story}>
      <Image source={props.image} style={styles.storyImage} />
    </TouchableOpacity>
  );
}

export default Story;
