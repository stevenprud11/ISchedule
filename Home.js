import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

  import { NavigationContainer } from '@react-navigation/native'
  import { createStackNavigator } from '@react-navigation/stack'

import App from './App';
import Camera from './Camera.js'
import Calendar from './Calendar.js'
import OCR from './OCR.js'




export default class Home extends Component {
  constructor(props) {
    super(props);   
    this.state = { 

    };
  }



  
    render(){
        const {navigation}= this.props; 
        //console.log('I am inn home screen');    
        return(
          <View style={{ alignItems: "center", justifyContent: "center"}}>
          


          {/* <Calendar //need to pass in setters to set parent prop state
                //title
                title={this.state.title} 
                setTitle={this.setTitle}

                //description
                description={this.state.description} 
                setDescription={this.setDescription}

                //start end date time
                startDate={this.state.startDate} 
                setStartDate={this.setStartDate}
                endDate={this.state.endDate}
                setEndDate={this.setEndDate}

            /> */}




            {/* <Text>Home Screen</Text>
            
            <Button 
                title="Go to Camera"
                onPress={() => navigation.navigate('Camera')}
            /> */}

          </View>
        );
    }
}


// import Calendar from './Calendar.js'


// export default class Home extends Component {


   

//     render(){
//         return(
            
//         )
//     }
// }
