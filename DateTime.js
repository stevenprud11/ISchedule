import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate(), '12', '00', '00', '00'));
  const [mode, setMode] = useState('date');
  const [value, setValue] = useState(date);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setValue(date)
      setMode('date');
      setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setValue(time)
      setDateTime(time);
      setShow(Platform.OS === 'ios');
      setMode('time');
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
   };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const formatDate = (date, time) => {
    return `${date.getMonth()}/${date.getDay() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };

  setDateTime = (time) => {
    date.setHours(time.getHours(), time.getMinutes())
  }

  return (
    <View>
        <Text>Current date: {new Date().toString()}</Text>
        <Text>Date date: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</Text>
        <Text>Date time: {date.toLocaleTimeString()}</Text>
        <Text>Time date: {time.getMonth()+1}/{time.getDate()}/{time.getFullYear()}</Text>
        <Text>Time time: {time.toLocaleTimeString()}</Text>

        <Text>Event Date: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} :: {date.toLocaleTimeString()}</Text>

      <View>
        <TouchableOpacity title="Show date picker" onPress={showDatepicker}>
          <Text>{date.getDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity title="Show time picker" onPress={showTimepicker}>
          <Text>{time.getTime}</Text>
        </TouchableOpacity>
      </View>
      <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"r
          value={date} // figure out how to show date vs time variable dependent on mode
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};



export default DateTime;