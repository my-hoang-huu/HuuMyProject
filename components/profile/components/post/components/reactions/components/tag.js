import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native';
import color from './../../../../../../../contains/colors';
import styles from './../style.js';

function Tag(props) {
  const [isActive, setNumber] = useState(false);
  const activePress = () => {
    setNumber(!isActive);
  };
  const thisColor = isActive ? color.activeColor : color.testColor;
  return (
    <TouchableOpacity onPress={activePress} style={styles.tagIcon}>
      <Fontisto name="favorite" size={36} color={thisColor} />
    </TouchableOpacity>
  );
}

export default Tag;
