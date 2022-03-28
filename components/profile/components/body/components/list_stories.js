import React from 'react';

import {View, ScrollView} from 'react-native';
import styles from './../style.js';
import Story from './story';
import images from './constant/story_images_source.js';

function Stories(props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.storiesScroll}>
      <View style={styles.stories}>
        {images.map((item, index) => (
          <Story key={index} navigate={props.navigate} image={item.image} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Stories;
