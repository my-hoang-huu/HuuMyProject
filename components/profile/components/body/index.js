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
    <TouchableOpacity style={styles.story}>
      <Image style={styles.storyImage} />
    </TouchableOpacity>
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
        <TouchableOpacity style={styles.middleButton}>
          <Text style={styles.textButton}>Static</Text>
        </TouchableOpacity>
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
