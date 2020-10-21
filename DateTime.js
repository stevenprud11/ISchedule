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
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate(), '12', '00', '00', '00'));
  const [startDateID] = useState(props.startDateID)
  const [endDateID] = useState(props.endDateID)



  const onDateChange = (event, selectedValue) =>{
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
    setMasterDate(currentDate);
    
    //setTimesDate(currentDate);
    //setTime(currentDate);
    //setDateTime(currentDate)
    //props.setDate(currentDate)
  }

  const onTimeChange = (event, selectedValue) => {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setMasterTime(selectedTime);
      
      //setDate(selectedTime);
      //setDatesTime(selectedTime);
      //props.setDate(selectedTime)
  }
  

  // const formatDate = (date, time) => {
  //   return `${date.getMonth()}/${date.getDay() +
  //     1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  // };

  setMasterDate = (date) => {
    master.setDate(date.getDate())
    master.setMonth(date.getMonth())
    master.setFullYear(date.getFullYear())
    if(startDateID == 1)
      props.setStartDate(master)
    else
      props.setEndDate(master)
  }

  setMasterTime = (time) => {
    console.log(this.state)
    console.log(props)
    master.setHours(time.getHours(), time.getMinutes())
    //props.setDate(master)
    if(startDateID == 1)
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
    
     <View sytles={{flexDirection: 'column', justifyContent: 'center'}}>

      <View title="Start Date Time">
          <Text>{props.str}</Text>
          <DateTimePicker
          testID="datePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onDateChange}
          />

          <DateTimePicker
            testID="timePicker"
            value={time}
            mode={'time'}
            display="default"
            onChange={onTimeChange}
          />
      </View>
      

      {/* <Button title="Submit"
        onPress={() => getDate()}
      /> */}
    </View>
    
  );
};



export default DateTime;