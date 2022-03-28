import * as React from 'react';

import {ScrollView, View, TouchableOpacity, Text} from 'react-native';

import Header from './components/header/index.js';
import Body from './components/body/index.js';
import Post from './components/post/index.js';

function ProfileScreen({navigation}) {
  return (
    <View>
      <ScrollView>
        <Header navigate={navigation.navigate} />
        <View height={20} />
        <Body navigate={navigation.navigate} />
        <View height={20} />
        <Post navigate={navigation.navigate} videoId="668nUCeBHyY" />
        <Post navigate={navigation.navigate} videoId="nPt8bK2gbaU" />
        <View height={10} />
      </ScrollView>
    </View>
  );
}
export default ProfileScreen;
