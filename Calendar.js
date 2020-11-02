import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';


export default class Calendar extends Component {
    constructor(props){
        super(props)
        state = {

        }
    }

    render(){
        const {navigation} = this.props
        return(
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          
            <Text>Calendar Screen</Text>
            
            {/* <Button 
                title="Go Back"
                onPress={() => navigation.goBack()}
            /> */}
            
          </View>
        )
    }
}