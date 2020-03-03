import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import { Toolbar, SafeAreaLayout, SaveAreaInset } from 'components';

export const OrderDetailScreen = (props) => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='ORDER DETAIL'
      onBackPress={props.navigation.goBack}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category='h1'>
      ORDER DETAIL
      </Text>
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
