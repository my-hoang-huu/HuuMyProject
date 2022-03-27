import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './style';

import {TouchableHighlight, Image, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.coverImage}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
        }}
      />
      <TouchableHighlight style={styles.settingIcon}>
        <AntDesign name="setting" size={24} color="white" />
      </TouchableHighlight>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileImage}
          source={
            require('../../../../assets/images/profileImg.jpg') // {
          }
        />
      </View>
      <Text style={styles.profileName}>Profile name</Text>
      <Text style={styles.userName}>@Username</Text>
    </View>
  );
};

export default Header;
