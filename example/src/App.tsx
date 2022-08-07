import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import RNAppointmentCalendarModule, { RNAppointmentCalendar } from 'react-native-appointment-calendar';

const App = () => {
  useEffect(() => {
    console.log(RNAppointmentCalendarModule);
  });

  return (
    <SafeAreaView>
      <RNAppointmentCalendar />
    </SafeAreaView>
  );
};

export default App;
