import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const WelcomeScreen = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Welcome!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 28
  },
});
