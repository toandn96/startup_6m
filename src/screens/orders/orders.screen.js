import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { Toolbar, SafeAreaLayout, SaveAreaInset } from 'components';
import { AppRoute } from "navigations";

export const OrdersScreen = (props) => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='ORDER'
    // onBackPress={props.navigation.goBack}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category='h1'>
        ORDER
      </Text>
      <Button
        onPress={() => props.navigation.navigate(AppRoute.ORDER_DETAIL_SCREEN)}>
        GO TO ORDER DETAIL
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
