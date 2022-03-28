import * as React from 'react';

import styles from './../style.js';
import HeaderFloatingMenu from './floating_menu/index.js';
import {Image, TouchableOpacity} from 'react-native';

class CoverImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let popupRef = React.createRef();
    return (
      <TouchableOpacity
        onPress={() => popupRef.show()}
        activeOpacity={0.8}
        style={styles.coverImage}>
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
          }}
        />
        <HeaderFloatingMenu ref={target => (popupRef = target)} />
      </TouchableOpacity>
    );
  }
}

export default CoverImage;
