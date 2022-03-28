import React from 'react';
import styles from './style.js';
import {View} from 'react-native';
import Tag from './components/tag.js';
import Vote from './components/vote.js';
import Favorite from './components/favorite.js';
import Comment from './components/comment.js';

const Reactions = props => {
  return (
    <View style={styles.postReact}>
      <View style={styles.leftGroup}>
        <Vote number={443} navigate={props.navigate} />
        <Favorite number={243} navigate={props.navigate} />
        <View style={styles.reactItem}>
          <Comment navigate={props.navigate} />
        </View>
      </View>
      <Tag />
    </View>
  );
};

export default Reactions;
