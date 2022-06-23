/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(awsconfig)
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
// const signUpConfig = {
// header: "my customized sign up",
// hideAllDefaults: true,
// signUpFields: [
//  {
// label: "Full name",
// key: "name",
// displayOrder:1,
// type:"string",
//  },
// {
// label: "Email",
// key: "email",
// displayOrder: 2,
// type: "string",
// },
// {
// label: "Username",
// key: "username",
// displayOrder: 3,
// type: "string",
// },
// {
// label: "Password",
// key: "password",
// displayOrder: 4,
// type: "password",
// },
// ]
// }
export default App;
