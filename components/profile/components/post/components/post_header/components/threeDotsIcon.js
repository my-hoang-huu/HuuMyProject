import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './../style.js';
import {TouchableOpacity, View} from 'react-native';
import PostFloatingMenu from './../../floating_menu/index.js';

class ThreeDotsIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    let popupRef = React.createRef();
    return (
      <View>
        <TouchableOpacity
          onPress={() => popupRef.show()}
          style={[styles.dotsIcon]}>
          <Entypo name="dots-three-horizontal" size={20} color="black" />
        </TouchableOpacity>
        <PostFloatingMenu ref={target => (popupRef = target)} />
      </View>
    );
  }
}

export default ThreeDotsIcon;
