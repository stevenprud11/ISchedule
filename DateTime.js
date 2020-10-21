import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, TouchableOpacity } from "react-native";


//current bug in date time for start date, 
//time will not update properly


const DateTime = (props) => {
  const [masterStart, setMasterStart] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), '12', '00', '00', '00'));

  const [masterEnd, setMasterEnd] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), '12', '00', '00', '00'));

  const onStartDateChange = (event, selectedValue) =>{
    const currentDate = selectedValue || new Date();
    setStartDate(currentDate);
    setMasterStartDate(currentDate);
  }

  const onStartTimeChange = (event, selectedValue) => {
      const selectedTime = selectedValue || new Date();
      setStartTime(selectedTime);
      setMasterStartTime(selectedTime);
  }
  
  setMasterStartDate = (date) => {
    masterStart.setDate(date.getDate())
    masterStart.setMonth(date.getMonth())
    masterStart.setFullYear(date.getFullYear())
    props.setStartDate(masterStart)
  }

  setMasterStartTime = (time) => {
    console.log("date time state: " + JSON.stringify(masterStart))
    console.log("props: " + JSON.stringify(props))
    masterStart.setHours(time.getHours(), time.getMinutes())
    props.setStartDate(masterStart)
  }

  const onEndDateChange = (event, selectedValue) =>{
    const currentDate = selectedValue || new Date();
    setEndDate(currentDate);
    setMasterEndDate(currentDate);
  }

  const onEndTimeChange = (event, selectedValue) => {
      const selectedTime = selectedValue || new Date();
      setEndTime(selectedTime);
      setMasterEndTime(selectedTime);
  }
  
  setMasterEndDate = (date) => {
    masterEnd.setDate(date.getDate())
    masterEnd.setMonth(date.getMonth())
    masterEnd.setFullYear(date.getFullYear())
    props.setEndDate(masterEnd)
  }

  setMasterEndTime = (time) => {
    console.log("date time state: " + JSON.stringify(masterEnd))
    console.log("props: " + JSON.stringify(props))
    masterEnd.setHours(time.getHours(), time.getMinutes())
    props.setEndDate(masterEnd)
  }


  return (
    
     <View sytles={{flexDirection: 'column', justifyContent: 'center'}}>

      <View title="Start Date Time">
          <Text>{props.str}</Text>
          <DateTimePicker
          testID="datePicker"
          value={startDate}
          mode={'date'}
          display="default"
          onChange={onStartDateChange}
          />

          <DateTimePicker
            testID="timePicker"
            value={startTime}
            mode={'time'}
            display="default"
            onChange={onStartTimeChange}
          />
      </View>

      <View title="Start Date Time">
          <Text>{props.str}</Text>
          <DateTimePicker
          testID="datePicker1"
          value={endDate}
          mode={'date'}
          display="default"
          onChange={onEndDateChange}
          />

          <DateTimePicker
            testID="timePicker1"
            value={endTime}
            mode={'time'}
            display="default"
            onChange={onEndTimeChange}
          />
      </View>
      

      {/* <Button title="Submit"
        onPress={() => getDate()}
      /> */}
    </View>
    
  );
};



export default DateTime;