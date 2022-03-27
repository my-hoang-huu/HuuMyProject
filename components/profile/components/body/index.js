import React from 'react';
import styles from './style';

import {
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';

function Story() {
  return (
    <TouchableHighlight style={styles.story}>
      <Image style={styles.storyImage} />
    </TouchableHighlight>
  );
}

const Body = () => {
  return (
    <View style={styles.body}>
      <View style={styles.middleButtons}>
        <TouchableOpacity
          style={styles.middleButton}
          onPress={() => alert('hi')}>
          <Text style={styles.textButton}>Post</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.middleButton}>
          <Text style={styles.textButton}>Static</Text>
        </TouchableHighlight>
      </View>
      <View height={20} />

      <Text style={styles.label}>Stories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.storiesScroll}>
        <View style={styles.stories}>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </View>
      </ScrollView>
    </View>
  );
};

export default Body;
