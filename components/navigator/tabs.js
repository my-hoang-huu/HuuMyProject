import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './../profile/screen.js';
import HomeScreen from './../home/screen.js';
import GroupScreen from './../group/screen.js';
import WalletScreen from './../wallet/screen.js';
import MessageScreen from './../message/screen.js';
import {View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#797676',
          // tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'grey',
        },
      }}
      initialRouteName={'Profile'}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            const size = focused ? 40 : 30;
            const color = focused ? '#E0D429' : 'grey';
            return (
              <View>
                <Entypo name="chat" size={size} color={color} />
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
            const color = focused ? '#E0D429' : 'grey';
            return (
              <View>
                <Entypo name="users" size={size} color={color} />
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
            const color = focused ? '#E0D429' : 'grey';
            return (
              <View>
                <Entypo name="wallet" size={size} color={color} />
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
            const color = focused ? '#E0D429' : 'grey';
            return (
              <View>
                <Entypo name="user" size={size} color={color} />
              </View>
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
