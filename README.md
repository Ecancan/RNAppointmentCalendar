# React Native Appointment Calendar

This module is customizable react native appointment component.
Main purpose of this module is taking appointment information from user.

## Installation

```
yarn add react-native-appointment-calendar
```
This module just made with javascript. There isn't have any native module in this module.
So no need any linking or pod installing.

## Usage

### Basic
```js
import { RNAppointmentCalendar } from 'react-native-appointment-calendar';

<RNAppointmentCalendar
    date={'2022-08-15 12:30'}
    onDateSelect={(date) => console.log('date', date)}
    onTimeSelect={(time) => console.log('time', time)}
    onDateTimeSelect={(dateTime) => console.log('dateTime', dateTime)}
/>
```

All props are optional. Actually no need any props for basic usage. 
By default, the Module will display based on the current date.

### Advanced
```js
import { RNAppointmentCalendar } from 'react-native-appointment-calendar';

<RNAppointmentCalendar
        date={'2022-08-15 12:30'}
        format={'YYYY-DD-MM HH:mm'}
        withTimes={true}
        monthRange={2}
        includeTimes={includeTimes}
        bookedTimes={bookedTimes}
        selectedTimes={selectedTimes}
        disabledDates={disabledDates}
        isMultipleTimeSelect={true}
        unSelectedTimeComponent={
          (
            <View>
              <Text>Not have any selected date.</Text>
            </View>
          )
        }
        onDateSelect={(date) => console.log('date', date)}
        onTimeSelect={(time) => console.log('time', time)}
        onDateTimeSelect={(dateTime) => console.log('dateTime', dateTime)}
/>
```
Here have multiple defined variables like `includeTimes`, `bookedTimes`, `selectedTimes`, `disabledDates`.
This variables have for different purpose. If you want to just selecting specific time use to this `includeTime` variable for filter
Or you just want to display booked times on calendar? Just use `bookedTimes`. But booked times have clickable property.

#### Structures of Defined Variables

```js
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
```

# Note
This module not have finished exactly. This readme file is just general purpose.
