//Example to add event in Device Calendar
import React, { Component } from 'react';
//Import React
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//Import basic react native components
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import DateTime from './DateTime.js'
// import Title from './Title.js'


import moment from 'moment';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    state = { 
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>
          Event Info:
        </Text>
        <View style={{ flexDirection: 'column',justifyContent: 'space-around'}}>
   <View style = {{ flex: 1, flexDirection:"row"}}>
            <Text style = {styles.title} >Title: </Text>
            <TextInput style = {styles.input}
              value={this.state.title}
              placeholder = {this.state.title} 
              onChangeText={(text) => this.setTitle(text)}
            />
              
          </View>
          <View style = {{ flex: 1, flexDirection:"row"}}>
            <Text style = {styles.title} >Description: </Text>
            <TextInput style = {styles.input}
              value={this.state.description}
              placeholder = {this.state.description} 
              onChangeText={(text) => this.setDescription(text)}
            /> 
          </View>

          <DateTime 
            startStr={"Value 1"}
            endStr={"Value 2"}
            startDateID={1} // 1 = start time
            endStartDateID={2}
            startDate={this.state.startDate} 
            setStartDate={this.state.setStartDate}
            endDate={this.state.endDate} 
            setEndDate={this.state.setEndDate}
            //startTime={this.props.startTime}
          />

      </View>
      


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Calendar.addToCalendar(this.state.title, this.state.description, this.state.startDate, this.state.endDate);
          }}>
          <Text>Add Event to Calendar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  static addToCalendar = (title, description, date, endDate) => {
    console.log(date)
    console.log(endDate)
    const eventConfig = {
      title: title,
      notes: description,
      startDate: date.toISOString(),
      endDate: endDate.toISOString(),
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
        titleColor: 'blue',
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(
        (eventInfo: {
          calendarItemIdentifier,
          eventIdentifier,
        }) => {
          alert('eventInfo -> ' + JSON.stringify(eventInfo));
        }
      )
      .catch((error) => {
        // handle error such as when user rejected permissions
        alert('Error -> ' + error);
      });
  };


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