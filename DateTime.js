import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate(), '12', '00', '00', '00'));
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);


  const onDateChange = (event, selectedValue) =>{
    //setShow(Platform.OS === 'ios');
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
    setTime(currentDate);
    //setValue(date)
    //setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
  }

  const onTimeChange = (event, selectedValue) => {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setDate(selectedTime);
      //setValue(time)
      setDateTime(time);
      //setShow(Platform.OS === 'ios');
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

  return (
    <View>
        {/* <Text>Current date: {new Date().toString()}</Text>
        <Text>Date date: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</Text>
        <Text>Date time: {date.toLocaleTimeString()}</Text>
        <Text>Time date: {time.getMonth()+1}/{time.getDate()}/{time.getFullYear()}</Text>
        <Text>Time time: {time.toLocaleTimeString()}</Text> */}

        <Text>Event Date: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} :: {date.toLocaleTimeString()}</Text>
        <Text>Event Date: {date.toString()}</Text>
      {/* <View>
        <TouchableOpacity title="Show date picker" onPress={showDateBool}>
          <Text>{date.getDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity title="Show time picker" onPress={showTimeBool}>
          <Text>{time.getTime}</Text>
        </TouchableOpacity>
      </View> */}

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

      {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date} // figure out how to show date vs time variable dependent on mode
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )} */}
    </View>
  );
};



export default DateTime;