import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { AppRoute } from "navigations";
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, setCounterApi } from '../../redux/actions';


export const HomeScreen = (props) => {

  const { counterRedux } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const _increment = () => {
    dispatch(setCounterApi(counterRedux.counter + 1))
  }

  const _decrement = () => {
    dispatch(setCounterApi(counterRedux.counter - 1))
  }

  return (
    <Layout style={styles.container}>
      <Text category='h4'>
        COUNTER TODO : {counterRedux.counter}
      </Text>
      <Button style={styles.addButton}
        onPress={() => props.navigation.navigate(AppRoute.HOME_DETAIL)}>
        DETAIL TODO
      </Button>
      <Button style={styles.addButton}
        onPress={_increment}>
        INCREMENT TODO
      </Button>

      <Button style={styles.addButton}
        onPress={_decrement}>
        DECREMENT TODO
      </Button>

    </Layout>
  )
}

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
