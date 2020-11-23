/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Home.js'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Camera from './Camera.js'
import Calendar from './Calendar.js'
import OCR from './OCR.js'
import Cam from './Cam.js'

const RootStack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
           */}
          <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Screen name="Camera" component={Cam} />
              <RootStack.Screen name="OCR" component={OCR} />
              <RootStack.Screen name="Calendar" component={Calendar} />
            </RootStack.Navigator>
          </NavigationContainer>
        


        {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </>
  );
};




const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;