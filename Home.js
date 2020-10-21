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

      //this.setTitle = this.setTitle.bind(this);

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

    // getTitle = () =>{
    //     return this.state.title
    // }

    // getDescription = () =>{
    //     return this.state.description
    // }

    // getDate = () =>{
    //     return this.state.date
    // }

    render(){
        return(
            <Calendar //need to pass in setters to set parent prop state
                title={this.state.title} 
                setTitle={this.setTitle}

                description={this.state.description} 
                setDescription={this.setDescription}

                startDate={this.state.startDate} 
                setStartDate={this.setStartDate}
                startTime={this.state.startTime}

                endDate={this.state.endDate}
                endTime={this.state.endTime}
                setEndDate={this.setEndDate}

                // getTitle={this.getTitle}
                // getDescription={this.getDescription}
                // getDate={this.getDate}
            />
        )
    }
}