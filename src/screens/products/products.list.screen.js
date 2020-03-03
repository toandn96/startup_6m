import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { Toolbar, SafeAreaLayout, SaveAreaInset } from 'components';
import { AppRoute } from "navigations";

export const ProductsListScreen = (props) => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='PRODUCT'
    // onBackPress={props.navigation.goBack}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category='h1'>
        PRODUCT
      </Text>
      <Button
        onPress={() => props.navigation.navigate(AppRoute.PRODUCT_DETAIL_SCREEN)}>
        GO TO PRODUCT DETAIL
      </Button>
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
