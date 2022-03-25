/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Icon} from 'react-native-elements';

const profileRadius = 140;
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //   </ScrollView>
    <SafeAreaView style={backgroundStyle}>
      <View>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={styles.coverImage}
              source={{
                // uri: 'https://reactnative.dev/img/tiny_logo.png',
                uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
                // uri: 'https://i.mydramalist.com/joQQJ_5c.jpg',
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.profileWrapper}>
              <Image
                style={styles.profileImage}
                source={
                  require('./assets/images/profileImg.jpg')
                  // {
                  //   uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
                  // }
                  // {uri: 'https://i.mydramalist.com/joQQJ_5c.jpg'}
                }
              />
            </View>
          </View>
          <View style={styles.body}></View>
          <View style={styles.navigator}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#207950',
  },
  header: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: profileRadius,
    height: profileRadius,
    borderRadius: 100,
    marginTop: -(profileRadius / 2),
  },
  coverImage: {
    width: '100%',
    height: 200,
  },

  profileImage: {
    width: profileRadius - 6,
    height: profileRadius - 6,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  body: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: Colors.red,
  },
  navigator: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: Colors.red,
  },
});

export default App;
