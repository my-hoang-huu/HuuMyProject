import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CoverImage from './components/coverImage.js';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import ProfileImage from './components/profileImage.js';
import styles from './style.js';

const Header = props => {
  return (
    <View style={styles.header}>
      <CoverImage />
      <TouchableOpacity
        onPress={() => props.navigate('Settings')}
        style={styles.settingIcon}>
        <AntDesign name="setting" size={24} color="white" />
      </TouchableOpacity>
      <ProfileImage />
      <Text style={styles.profileName}>Profile name</Text>
      <Text style={styles.userName}>@Username</Text>
    </View>
  );
};

export default Header;
