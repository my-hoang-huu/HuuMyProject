import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>Wallet screen</Text>
    </View>
  );
}
export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
  },
});
