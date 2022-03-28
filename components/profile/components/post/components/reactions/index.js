import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style.js';
import {TouchableOpacity, Text, View} from 'react-native';
import color from './../../../../../../contains/colors';

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
        <Text
          style={
            isActive
              ? {
                  fontWeight: 'bold',
                  color: color.activeColor,
                }
              : {
                  fontWeight: 'normal',
                  color: 'gray',
                }
          }>
          Vote
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.voteNumber}
        onPress={() => alert(isActive)}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

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
      <TouchableOpacity style={styles.heartNumber}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

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

const Reactions = props => {
  return (
    <View style={styles.postReact}>
      <View style={styles.leftGroup}>
        <Vote number={443} />
        <Favorite number={243} />
        <View style={styles.reactItem}>
          <TouchableOpacity
            onPress={() => props.navigate('Comments')}
            style={styles.commentButton}>
            <Fontisto name="comment" size={26} color={color.blackLightColor} />
            <Text style={styles.commentNumber}>432</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Tag />
    </View>
  );
};

export default Reactions;
