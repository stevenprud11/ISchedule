import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

export default class Title extends Component {
    state ={
        title: "Event Title"
    }

    render(){


        return(
            <View style = {{ flex: 1, flexDirection:"row"}}>
            <Text style = {styles.title} >Description: </Text>
            <TextInput style = {styles.input}
              value={this.state.title}
              placeholder = {this.state.title} 
              onChangeText={(title) => this.setState({title})}
            />
              
          </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 40,
    },
    heading: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 16,
    },
    buttonHalf: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      flex: 1,
    },
    title: {
      flexDirection: "row",
      alignItems: 'center',
      marginTop: 10,
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: 50,
      padding: 10,
      backgroundColor: '#ffe6e6',
    },
    date: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      padding: 10,
    }
  });

