import React from 'react';
import styles from './../style.js';
import {View, Image, Text} from 'react-native';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.postUser]}>
        <Image
          style={styles.postProfileImg}
          source={require('../../../../../../../assets/images/profileImg.jpg')}
        />
        <View>
          <Text style={styles.label}>Profile name</Text>
          <Text>@Username</Text>
        </View>
      </View>
    );
  }
}

export default User;
