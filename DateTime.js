import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DateTime = (props) => {
  //console.log(props)
  //const [setParentDate] = props.setDate;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate(), '12', '00', '00', '00'));
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);


  const onDateChange = (event, selectedValue) =>{
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
    setTime(currentDate);
  }

  const onTimeChange = (event, selectedValue) => {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setDate(selectedTime);
      setDateTime(time);
  }

  const showDateBool = currentShow => {
    setShowDate(true);
  }

  const showTimeBool = currentShow => {
    setShowTime(true);
  }
  

  const formatDate = (date, time) => {
    return `${date.getMonth()}/${date.getDay() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };

  setDateTime = (time) => {
    date.setHours(time.getHours(), time.getMinutes())
  }

  getDate = () => {
    console.log("datetime: " + date)
    props.setDate(date)
  }

  return (
    
    <View sytles={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text styles={{textAlign: 'center'}}>Event Date: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} {date.toLocaleTimeString()}</Text>
        <Text>Event Date: {date.toString()}</Text>


      <View>
          <Button onPress={showDateBool} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimeBool} title="Show time picker!" />
      </View>
      
      {showDate && (
        <DateTimePicker
        testID="datePicker"
        value={date}
        mode={'date'}
        display="default"
        onChange={onDateChange}
      />)}

      {showTime && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode={'time'}
          display="default"
          onChange={onTimeChange}
      />)}

      <Button title="Submit"
        onPress={() => getDate()}
      />
    </View>
    
  );
};



export default DateTime;