import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import { Toolbar, SafeAreaLayout, SaveAreaInset } from 'components';

export const ProductDetailScreen = (props) => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='PRODUCT DETAIL'
      onBackPress={props.navigation.goBack}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category='h1'>
        PRODUCT DETAIL
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
