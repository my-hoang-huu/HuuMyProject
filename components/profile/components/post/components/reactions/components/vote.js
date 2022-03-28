import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './../style.js';

function Vote(props) {
  const [isActive, setNumber] = useState(false);
  const activePress = () => {
    setNumber(!isActive);
  };
  const number = isActive ? props.number + 1 : props.number;

  return (
    <View style={styles.reactItem}>
      <TouchableOpacity
        onPress={activePress}
        style={[
          styles.voteButton,
          isActive ? styles.reactButtonActive : styles.reactButton,
        ]}>
        <Text style={isActive ? styles.textButtonActive : styles.textButton}>
          Vote
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.voteNumber}
        onPress={() => props.navigate('VoteList')}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Vote;
