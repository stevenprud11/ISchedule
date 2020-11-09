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
  ScrollView,
} from 'react-native';
//Import basic react native components
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import Description from './Description.js'
import DateTime from './DateTime.js'
import Title from './Title.js'


export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "10293847561029384756",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
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

  setValues = (route) =>{
    if(this.state.title == "10293847561029384756")
      this.setState({
        title: route.params.title, 
        description: route.params.description, 
        startDate: route.params.startDate, 
        endDate: route.params.endDate
      })
  }

  render() {
    const {route} = this.props;
    this.setValues(route)
    return (
      <ScrollView>

        <View style={styles.container}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>
            Event Info:
          </Text>


        <View style={{ flexDirection: 'column',justifyContent: 'space-around'}}>
            <Title 
              title={this.state.title}
              setTitle={this.setTitle}
              />

            <Description 
              description={this.state.description}
              setDescription={this.setDescription}
            />

            <DateTime 
              str={"Value 1"}
              startDate={this.state.startDate} 
              setStartDate={this.setStartDate}

              endDate={this.state.endDate}
              setEndDate={this.setEndDate}
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
      </ScrollView>
    );
  }

  static addToCalendar = (title: string, description: string, startDate: Date, endDate: Date) => {
    console.log(startDate)
    console.log(endDate)
    const eventConfig = {
      title: title,
      notes: description,
      startDate: startDate.toISOString(),
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
