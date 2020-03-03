import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import {
  Toolbar, SafeAreaLayout,
  SaveAreaInset,
} from 'components';
import { AuthContext } from '../../../src';

export const SettingScreen = (props) => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets={SaveAreaInset.TOP}>
      <Divider />
      <Layout style={styles.container}>
        <Text category='h1'>
          SETTING
      </Text>
        <Button onPress={signOut} style={styles.addButton}>
          LOGOUT
    </Button>
      </Layout>
    </SafeAreaLayout>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginVertical: 8,
  },
});
