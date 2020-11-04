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

export default class Camera extends Component {
    constructor(props){
        super(props)
        state = {

        }
    }

    render(){
        const {navigation} = this.props;
        return(
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          
            <Text>Camera Screen</Text>
            
            <Button 
                title="Submit"
                onPress={() => navigation.push('Calendar')}
            />
            
          </View>
        );
    }
}


