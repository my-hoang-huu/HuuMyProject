import * as React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './../profile/screen.js';
import PostScreen from './../profile/sub_screens/post.js';
import StaticScreen from './../profile/sub_screens/static.js';
import CommentsScreen from './../profile/sub_screens/comment.js';
import StoryScreen from './../profile/sub_screens/story.js';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Static" component={StaticScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
