import * as React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import HeaderFloatingMenu from './components/floating_menu/index.js';
import {Image, Text, View, TouchableOpacity} from 'react-native';

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
              require('../../../../assets/images/profileImg.jpg') // {
            }
          />
        </View>
        <HeaderFloatingMenu ref={target => (popupRef = target)} />
      </TouchableOpacity>
    );
  }
}

class CoverImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let popupRef = React.createRef();
    return (
      <TouchableOpacity
        onPress={() => popupRef.show()}
        activeOpacity={0.8}
        style={styles.coverImage}>
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
          }}
        />
        <HeaderFloatingMenu ref={target => (popupRef = target)} />
      </TouchableOpacity>
    );
  }
}

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
