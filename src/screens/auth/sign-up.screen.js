import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Formik, FormikProps } from 'formik';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { AppRoute } from 'navigations';
import { Toolbar, FormInput } from 'components';

import { SignUpSchema } from '../../core/utils';

export const SignUpScreen = (props) => {

  const insets = useSafeArea();

  const onFormSubmit = (values) => {
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignIn = () => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props) => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <FormInput
        id='password'
        style={styles.formControl}
        placeholder='Password'
      />
      <FormInput
        id='username'
        style={styles.formControl}
        placeholder='Username'
      />
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        SIGN UP
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues=""
          validationSchema={SignUpSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.haveAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignIn}>
          Already have an account?
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  haveAccountButton: {
    alignSelf: 'center',
  },
});
