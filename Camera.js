import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';


export default class Camera extends Component {
    constructor(props){
        super(props)
        state = {

        }
    }

    render(){
        const {navigation} = this.props;
        return(
          <View style={{alignItems: "center", justifyContent: "center"}}>
          
            <Text>Camera Screen</Text>
            
            <Button 
                title="Take Picture"
                onPress={() => navigation.push('OCR')}
            />
            
          </View>
        );
    }
}


