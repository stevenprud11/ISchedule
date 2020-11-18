import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';



export default class OCR extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "Event Title",
            description: "Event Description",
            startDate: new Date(),
            endDate: new Date(),
            value: ""
        }
    }

    componentDidMount() {
        this.setState({value:this.props.route.params.value})
        console.log(this.state)
    }
    


    render(){
        console.log(this.state)
        const {navigation} = this.props;
        const title = this.state.title;
        const setTitle = this.setTitle;
        const description = this.state.description;
        const setDescription = this.setDescription;
        const startDate = this.state.startDate;
        const setStartDate = this.setStartDate;
        const endDate = this.state.endDate;
        const setEndDate = this.setEndDate;

        return(
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          
            <Text>OCR Screen</Text>
            {/* <Text>{this.state.value}</Text> */}
            <Button 
                title="Data Loaded"
                onPress={() => navigation.push('Calendar', {                
                    title,
                    description,
                    startDate,
                    endDate,
                })}
            />
            
          </View>
        );
    }
}


