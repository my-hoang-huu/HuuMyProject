import * as React from 'react';
import {Button, View} from 'react-native';
import color from './../../../contains/colors';

function StaticScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        color={color.buttonColor}
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default StaticScreen;
