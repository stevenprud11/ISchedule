import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, TouchableOpacity } from "react-native";


//current bug in date time for start date, 
//time will not update properly


const DateTime = (props) => {
  //console.log(props)
  //const [setParentDate] = props.setDate;
  const [master, setMaster] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date(startDate.getFullYear(),
  startDate.getMonth(), startDate.getDate(), '12', '00', '00', '00'));
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(endDate.getFullYear(),
  endDate.getMonth(), endDate.getDate(), '12', '00', '00', '00'));
  const [startDateID] = useState(props.startDateID)
  const [endDateID] = useState(props.endDateID)
  const [dateChoice, setDateChoice] = useState(false)
  const [timeChoice, setTimeChoice] = useState(false)



  const onStartDateChange = (event, selectedValue) =>{
    const currentStartDate = selectedValue || new Date();
    setStartDate(currentStartDate);
    setMasterDate(currentStartDate);
    setDateChoice(false);
    
    //setTimesDate(currentDate);
    //setTime(currentDate);
    //setDateTime(currentDate)
    //props.setDate(currentDate)
  }
  const onEndDateChange = (event, selectedValue) =>{
    const currentEndDate = selectedValue || new Date();
    setEndDate(currentEndDate);
    setMasterDate(currentEndDate);
    setDateChoice(true);
  }

  const onStartTimeChange = (event, selectedValue) => {
      const selectedStartTime = selectedValue || new Date();
      setStartTime(selectedStartTime);
      setMasterTime(selectedStartTime);
      setTimeChoice(false);
      
      //setDate(selectedTime);
      //setDatesTime(selectedTime);
      //props.setDate(selectedTime)
  }
  const onEndTimeChange = (event, selectedValue) => {
    const selectedEndTime = selectedValue || new Date();
    setEndTime(selectedEndTime);
    setTimeChoice(true);
    setMasterTime(selectedEndTime);
}
  

  // const formatDate = (date, time) => {
  //   return `${date.getMonth()}/${date.getDay() +
  //     1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  // };

  setMasterDate = (date) => {
    master.setDate(date.getDate())
    master.setMonth(date.getMonth())
    master.setFullYear(date.getFullYear())
    if(dateChoice === false)
      props.setStartDate(master)
    else
      props.setEndDate(master)
  }

  setMasterTime = (time) => {
    console.log(this.state)
    console.log(props)
    master.setHours(time.getHours(), time.getMinutes())
    //props.setDate(master)
    if(timeChoice === false)
      props.setStartDate(master)
    else
      props.setEndDate(master)
  }

  // setTimesDate = (date) => {
  //   time.setDate(date.getDate())
  //   time.setFullYear(date.getFullYear())
  //   time.setMonth(date.getMonth());

  //   props.setDate(time)
  //   console.log("Set Times Date: " + time)
  // }

  // setDatesTime = (time) => {
  //   date.setHours(time.getHours(), time.getMinutes())
  //   props.setDate(date)
  //   console.log("Set Dates Time: " + date)
  // }

  // getDate = () => {
  //   console.log("datetime: " + date)
  //   props.setDate(date)
  // }

  return (
    
     <View styles={{flexDirection: 'column', justifyContent: 'center'}}>

      <View title="Start Date Time">
          <Text>{props.startStr}</Text>
          <DateTimePicker
          testID="startDatePicker"
          value={startDate}
          mode={'date'}
          display="default"
          onChange={onStartDateChange}
          />

          <DateTimePicker
            testID="starttimePicker"
            value={startTime}
            mode={'time'}
            display="default"
            onChange={onStartTimeChange}
          />
      </View>

      <View title="End Date Time">
          <Text>{props.endStr}</Text>
          <DateTimePicker
          testID="endDatePicker"
          value={endDate}
          mode={'date'}
          display="default"
          onChange={onEndDateChange}
          />

          <DateTimePicker
            testID="endTimePicker"
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