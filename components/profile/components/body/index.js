import React from 'react';
import styles from './style';
import Story from './components/story.js';
import {TouchableOpacity, ScrollView, Text, View} from 'react-native';

const images = [
  {image: require('../../../../assets/images/stories/thumb-card3.png')},
  {image: require('../../../../assets/images/stories/thumb-card4.png')},
  {image: require('../../../../assets/images/stories/thumb-card5.png')},
  {image: require('../../../../assets/images/stories/thumb-card6.png')},
  {image: require('../../../../assets/images/stories/thumb-card7.png')},
  {image: require('../../../../assets/images/stories/thumb-card8.png')},
];

const Body = props => {
  return (
    <View style={styles.body}>
      <View style={styles.middleButtons}>
        <TouchableOpacity
          onPress={() => props.navigate('Post')}
          style={styles.middleButton}>
          <Text style={styles.textButton}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigate('Static')}
          style={styles.middleButton}>
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
          {images.map((item, index) => (
            <Story key={index} navigate={props.navigate} image={item.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Body;
