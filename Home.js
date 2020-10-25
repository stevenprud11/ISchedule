import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import Calendar from './Calendar.js'


export default class Home extends Component {
    constructor(props) {
      super(props);
      
      this.state = { 
        title: "Event Title",
        description: "Event Description",
        startDate: new Date(),
        endDate: new Date()
      };
    }

    setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    setDescription = (newDescription) => {
        this.setState({description: newDescription})
    }

    setStartDate = (newDate) => {
        this.setState({startDate: newDate}, () => {console.log("Home Start Date: " + this.state.startDate)})
    }

    setEndDate = (newEndDate) => {
        this.setState({endDate: newEndDate}, () => {console.log("Home End Date: " + this.state.endDate)})
    }

    render(){
        return(
            <Calendar //need to pass in setters to set parent prop state
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

            />
        )
    }
}