import React from 'react';

import {TouchableOpacity, Text} from 'react-native';
import styles from './../style.js';
function NavButton(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigate(props.label)}
      style={styles.middleButton}>
      <Text style={styles.textButton}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export default NavButton;
