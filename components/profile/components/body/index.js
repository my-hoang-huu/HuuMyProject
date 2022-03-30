import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';
import NavButton from './components/button.js';
import Stories from './components/storyList.js';

const Body = props => {
  return (
    <View style={styles.body}>
      <View style={styles.middleButtons}>
        <NavButton label={'Post'} navigate={props.navigate} />
        <NavButton label={'Static'} navigate={props.navigate} />
      </View>
      <View height={20} />
      <Text style={styles.label}>Stories</Text>
      <Stories navigate={props.navigate} />
    </View>
  );
};

export default Body;
