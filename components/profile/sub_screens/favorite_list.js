import * as React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import color from './../../../contains/colors';

function FavoriteListScreen({navigation}) {
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

export default FavoriteListScreen;
