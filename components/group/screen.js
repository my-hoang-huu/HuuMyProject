import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function GroupScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Group page</Text>
    </View>
  );
}
export default GroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
  },
});
