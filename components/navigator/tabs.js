import 'react-native-gesture-handler';

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './../home/screen.js';
import GroupScreen from './../group/screen.js';
import WalletScreen from './../wallet/screen.js';
import MessageScreen from './../message/screen.js';
import {View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileStack from './profile_stack.js';
import color from './../../contains/colors';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'red'},
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: color.backgroundColor,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
        },
      }}
      initialRouteName={'ProfileStack'}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            const size = focused ? 40 : 30;
            const iconColor = focused ? color.yellowColor : 'grey';
            return (
              <View>
                <Entypo name="chat" size={size} color={iconColor} />
              </View>
            );
          },
        }}
        name="Message"
        component={MessageScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            const size = focused ? 40 : 30;
            const iconColor = focused ? color.yellowColor : 'grey';
            return (
              <View>
                <Entypo name="users" size={size} color={iconColor} />
              </View>
            );
          },
        }}
        name="Group"
        component={GroupScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/images/bottom_bar/avatar.jpg')}
                resizeMode="contain"
                style={{
                  width: focused ? 55 : 45,
                  height: focused ? 55 : 45,
                }}
              />
            </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            const size = focused ? 40 : 30;
            const iconColor = focused ? color.yellowColor : 'grey';
            return (
              <View>
                <Entypo name="wallet" size={size} color={iconColor} />
              </View>
            );
          },
        }}
        name="Wallet"
        component={WalletScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const size = focused ? 40 : 30;
            const iconColor = focused ? color.yellowColor : 'grey';
            return (
              <View>
                <Entypo name="user" size={size} color={iconColor} />
              </View>
            );
          },
        }}
        name="ProfileStack"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
