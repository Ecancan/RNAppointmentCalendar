import React from 'react';
import { SafeAreaView } from 'react-native';
import { RNAppointmentCalendar } from 'react-native-appointment-calendar';

const App = () => {
  const includeTimes = {
    '2022-08-13': ['12:30', '14:30'],
    '2022-08-14': ['12:30', '14:30'],
    '2022-08-15': ['12:30'],
    '2022-08-16': ['12:30'],
    '2022-08-17': ['12:30'],
    '2022-08-18': ['12:30'],
    '2022-08-19': ['12:30']
  };

  const bookedTimes = {
    '2022-08-13': ['12:30', '14:30'],
    '2022-08-14': ['12:30', '14:30'],
    '2022-08-15': ['12:30'],
    '2022-08-16': ['12:30'],
    '2022-08-17': ['12:30'],
    '2022-08-18': ['12:30'],
    '2022-08-19': ['12:30']
  };

  const selectedTimes = {
    '2022-08-13': ['12:30', '14:30'],
    '2022-08-14': ['12:30'],
    '2022-08-15': ['12:30'],
    '2022-08-16': ['12:30'],
    '2022-08-17': ['12:30'],
    '2022-08-18': ['12:30'],
    '2022-08-19': ['12:30']
  };

  const disabledDates = ['2022-08-13', '2022-08-15', '2022-08-16', '2022-08-17', '2022-08-18', '2022-08-19'];

  return (
    <SafeAreaView>
      <RNAppointmentCalendar
        date={'2022-08-15 12:30'}
        withTimes={true}
        monthRange={2}
        disabledDates={disabledDates}
        isMultipleTimeSelect={true}
        onDateSelect={(date) => console.log('date', date)}
        onTimeSelect={(time) => console.log('time', time)}
        onDateTimeSelect={(dateTime) => console.log('dateTime', dateTime)}
      />
    </SafeAreaView>
  );
};

export default App;
