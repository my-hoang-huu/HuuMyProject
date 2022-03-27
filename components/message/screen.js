import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Message page</Text>
    </View>
  );
}
export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
  },
});
