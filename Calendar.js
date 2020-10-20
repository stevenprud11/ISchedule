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
import Description from './Description.js'
import DateTime from './DateTime.js'
import Title from './Title.js'


import moment from 'moment';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    state = { 
      title: props.title,
      description: props.description,
      date: props.date,
      endDate: props.endDate
     };
  }



  render() {
    const {title, description, date, time, endDate} = this.props;
    //console.log(this.props);
    //console.log(title);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>
          Event Info:
        </Text>


      <View style={{ flexDirection: 'column',justifyContent: 'space-around'}}>
          <Title 
            title={title} 
            setTitle={this.props.setTitle} 
            />

          <Description 
            description={description}
            setDescription={this.props.setDescription}
          />

          <DateTime 
            str={"Event Start Date and Time"}
            date={this.props.date} 
            setDate={this.props.setDate}
            //time={this.props.time}
          />

          <DateTime 
            str={"Event End Date and Time"}
            date={this.props.endDate} 
            setDate={this.props.setEndDate}
            // time={this.props.time}
          />

      </View>
      


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Calendar.addToCalendar(this.props.title, this.props.description, this.props.date, this.props.endDate);
          }}>
          <Text>Add Event to Calendar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  static addToCalendar = (title: string, description: string, date: Date, endDate: Date) => {
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
          calendarItemIdentifier: string,
          eventIdentifier: string,
        }) => {
          alert('eventInfo -> ' + JSON.stringify(eventInfo));
        }
      )
      .catch((error: string) => {
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