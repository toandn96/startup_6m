import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useSafeArea } from 'react-native-safe-area-context';
import { Toolbar, ImageOverlay } from 'components';
// import { ProgressBar } from '../../components/progress-bar.component';


export const HomeDetailsScreen = (props) => {

  // const { todo } = props.route.params;
  const todo = {
    title: 'TODO 1',
    progress: 'TODO 1',
    description: 'TODO 1'
  };
  const insets = useSafeArea();

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageOverlay>
      <Layout style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text
            style={styles.title}
            category='h4'>
            {todo.title}
          </Text>
          {/* <ProgressBar
            style={styles.progressBar}
            progress={todo.progress}
            text={`${todo.progress}%`}
          /> */}
          <Text style={styles.title}>
            {todo.description}
          </Text>
        </View>
        <Button
          onPress={props.navigation.goBack}>
          COMPLETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  appBar: {
    height: 192,
  },
  title: {
    marginVertical: 4,
  },
  progressBar: {
    width: '50%',
    marginVertical: 16,
  },
});
