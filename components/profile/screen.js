import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import Header from './components/header/index.js';
import Body from './components/body/index.js';
import Post from './components/post/index.js';

function ProfileScreen() {
  return (
    <View>
      <ScrollView>
        <Header />
        <View height={20} />
        <Body />
        <View height={20} />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}
export default ProfileScreen;
