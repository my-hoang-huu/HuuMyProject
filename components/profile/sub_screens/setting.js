import * as React from 'react';
import {Button, View} from 'react-native';
import color from './../../../contains/colors';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        color={color.buttonColor}
        title="Go back to profile page"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default SettingsScreen;
