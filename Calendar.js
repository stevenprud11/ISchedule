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

//Import library for AddCalendarEvent
import moment from 'moment';
//Import moment.js to deal with time

// const EVENT_TITLE = '';
// const TIME_NOW_IN_UTC = '';

// const utcDateToString = (momentInUTC: moment): string => {
//   let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
//   return s;
// };

//https://github.com/react-native-datetimepicker/datetimepicker/issues/94

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    state = { 

    };
  }



  render() {
    const {title, description, date, time} = this.props;
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
            date={date} 
            setDate={this.props.setDate}  
            time={time}
            setTime={this.props.setTime}
          />

      </View>
      


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Calendar.addToCalendar(this.state.EVENT_TITLE);
          }}>
          <Text>Add Event to Calendar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  static addToCalendar = (title: string, startDateUTC: moment) => {

    const eventConfig = {
      title,
      startDate: utcDateToString(startDateUTC),
      endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
      notes: 'tasty!',
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

  static editCalendarEventWithId = (eventId: string) => {
    const eventConfig = {
      eventId,
    };

    AddCalendarEvent.presentEventEditingDialog(eventConfig)
      .then(eventInfo => {
        alert('eventInfo -> ' + JSON.stringify(eventInfo));
      })
      .catch((error: string) => {
        alert('Error -> ' + error);
      });
  };

  static showCalendarEventWithId = (eventId: string) => {
    const eventConfig = {
      eventId,
      allowsEditing: true,
      allowsCalendarPreview: true,
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
      },
    };

    AddCalendarEvent.presentEventViewingDialog(eventConfig)
      .then(eventInfo => {
        alert('eventInfo -> ' + JSON.stringify(eventInfo));
      })
      .catch((error: string) => {
        alert('Error -> ' + error);
      });
  };

  static addToCalendar = (title: string) => {

    const eventConfig = {
      title,
      notes: 'tasty!',
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