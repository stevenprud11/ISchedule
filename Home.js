import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';


import App from './App';

export default class Home extends Component {
    constructor(props){
        super(props)
        state = {
            
        }
    }

    render(){
        const {navigation}= this.props; 
        console.log('I am inn home screen');    
        return(
          <View style={{ alignItems: "center", justifyContent: "center"}}>
          
            <Text>Home Screen</Text>
            
            <Button 
                title="Go to Camera"
                onPress={() => navigation.navigate('Camera')}
            />

          </View>
        );
    }
}


