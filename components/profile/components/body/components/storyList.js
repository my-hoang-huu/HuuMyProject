import React from 'react';

import {FlatList} from 'react-native';
import styles from './../style.js';
import Story from './story.js';
import {DATA} from './../../../../../contains/userAPI.js';

function Stories(props) {
  const renderItem = ({item}) => (
    <Story navigate={props.navigate} image={item.urls.small} />
  );
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default Stories;
