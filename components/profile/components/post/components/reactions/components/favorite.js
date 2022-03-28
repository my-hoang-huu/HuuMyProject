import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import color from './../../../../../../../contains/colors';
import styles from './../style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Favorite(props) {
  const [isActive, setNumber] = useState(false);
  const activePress = () => {
    setNumber(!isActive);
  };
  const number = isActive ? props.number + 1 : props.number;
  const heartIcon = isActive ? (
    <AntDesign name="heart" size={28} color={color.activeColor} />
  ) : (
    <AntDesign name="hearto" size={28} color={color.blackLightColor} />
  );
  return (
    <View style={styles.reactItem}>
      <TouchableOpacity
        onPress={activePress}
        style={[styles.heartButton, styles.reactButton]}>
        {heartIcon}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigate('FavoriteList')}
        style={styles.heartNumber}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Favorite;
