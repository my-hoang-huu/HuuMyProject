import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style.js';
import {TouchableOpacity, Text, View} from 'react-native';

function ModalItem(props) {
  return (
    <TouchableOpacity>
      <View style={styles.modalItem}>
        <AntDesign name={props.icon} size={26} color="white" />
        <Text style={styles.modalText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ModalItem;
