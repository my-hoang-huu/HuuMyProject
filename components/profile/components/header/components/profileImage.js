import * as React from 'react';

import styles from './../style.js';
import HeaderFloatingMenu from './floating_menu/index.js';
import {Image, View, TouchableOpacity} from 'react-native';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let popupRef = React.createRef();

    return (
      <TouchableOpacity onPress={() => popupRef.show()} activeOpacity={0.8}>
        <View style={styles.profileWrapper}>
          <Image
            style={styles.profileImage}
            source={
              require('../../../../../assets/images/profileImg.jpg') // {
            }
          />
        </View>
        <HeaderFloatingMenu ref={target => (popupRef = target)} />
      </TouchableOpacity>
    );
  }
}

export default ProfileImage;
