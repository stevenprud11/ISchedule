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

      this.setTitle = this.setTitle.bind(this);

      this.state = { 
        title: "Event Title",
        description: "Event Description",
        date: new Date()
      };
    }

    setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    setDescription = (newDescription) => {
        this.setState({description: newDescription})
    }

    setDate = (newDate) => {
        this.setState({date: newDate}, () => {console.log("new home date: " + this.state.date)})
    }

    getTitle = () =>{
        return this.state.title
    }

    getDescription = () =>{
        return this.state.description
    }

    getDate = () =>{
        return this.state.date
    }

    render(){
        return(
            <Calendar //need to pass in setters to set parent prop state
                title={this.state.title} 
                setTitle={this.setTitle}
                description={this.state.description} 
                setDescription={this.setDescription}
                date={this.state.date} 
                setDate={this.setDate}
                time={this.state.time}

                getTitle={this.getTitle}
                getDescription={this.getDescription}
                getDate={this.getDate}
            />
        )
    }
}