# React Native Appointment Calendar

This module is customizable react native appointment component. Main purpose of this module is taking appointment
information from user.

## Demo 

![demo1](https://i.giphy.com/media/BZg4HDMgayzMxhEEN4/giphy.webp)
![demo2](https://i.giphy.com/media/EAVFYBZLHIR7FZ0s2G/giphy.webp)
![demo3](https://i.giphy.com/media/cw95zM4y1zGFL3tuk6/giphy.webp)

## Installation

##### With Yarn

```
yarn add @ecancan/react-native-appointment-calendar
```

##### With Npm

```
npm install @ecancan/react-native-appointment-calendar
```

This module just made with javascript. There isn't have any native module in this module. So no need any linking or pod
installing.

## Usage

### Basic

```js
import {RNAppointmentCalendar} from 'react-native-appointment-calendar';

<RNAppointmentCalendar
  date={'2022-08-15 12:30'}
  onDateSelect={(date) => console.log('date', date)}
  onTimeSelect={(time) => console.log('time', time)}
  onDateTimeSelect={(dateTime) => console.log('dateTime', dateTime)}
/>
```

All props are optional. Actually no need any props for basic usage. By default, the Module will display based on the
current date.

### Advanced

```js
import {RNAppointmentCalendar} from 'react-native-appointment-calendar';

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

Here have multiple defined variables like `includeTimes`, `bookedTimes`, `selectedTimes`, `disabledDates`. This
variables have for different purpose. If you want to just selecting specific time use to this `includeTime` variable for
filter Or you just want to display booked times on calendar? Just use `bookedTimes`. But `bookedTimes` have clickable
property.

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

#### Customize date card

```js
import {RNAppointmentCalendar} from 'react-native-appointment-calendar';

const colors = {
  selectedBgColor: '#000',
  selectedColor: '#eaeaea',
  currentDateColor: '#328ae8',
  disableOpacity: 0.5
};
const dateCardPositions = [
  {
    key: 'dayOfWeek',
    isVisible: true,
    fontSize: 12
  },
  {
    key: 'day',
    isVisible: true,
    fontSize: 20
  },
  {
    key: 'month',
    isVisible: true,
    fontSize: 14
  }
];

<RNAppointmentCalendar
  date={'2022-08-15 12:30'}
  format={'YYYY-DD-MM HH:mm'}
  withTimes={true}
  monthRange={2}
  colors={colors}
  dateCardPositions={dateCardPositions}
  onDateSelect={(date) => console.log('date', date)}
  onTimeSelect={(time) => console.log('time', time)}
  onDateTimeSelect={(dateTime) => console.log('dateTime', dateTime)}
/>
```

## All Props

| Prop Name | Necessity | Value Example                                                      | Value Type |
|-----------|-----------|--------------------------------------------------------------------|------------|
| `date`    | optional  | `2022-08-15 12:30`                                                 | `string`   |
| `format`  | optional          | `YYYY-DD-MM HH:mm`                                                 | `string`   |
| `includeTimes`          | optional          | [Structure Of Defined Variables](#structures-of-defined-variables) | `object`   |
| `disabledDates`          | optional          | [Structure Of Defined Variables](#structures-of-defined-variables) | `array`    |
| `bookedTimes`          | optional          | [Structure Of Defined Variables](#structures-of-defined-variables) | `object`   |
| `selectedTimes`          | optional          | [Structure Of Defined Variables](#structures-of-defined-variables) | `object`   |
| `monthRange`          | optional          | `2`                                                                | `number`   |
| `timeInterval`          | optional          | `30`                                                               | `number`   |
| `withTimes`          | optional          | `false`                                                            | `boolean`  |
| `isMultipleTimeSelect`          | optional          | `false`                                                            | `boolean`  |
|  `unSelectedTimeComponent`         | optional          | [Advanced](#advanced)                                              |            |
|  `colors`         | optional          |    [Customize date card](#customize-date-card)                                                                | `object`   |
|  `dateCardPositions`         |  optional         | [Customize date card](#customize-date-card)                        |            |
|  `styleDateFlatList`         |  optional         | Regular react style prop                                           | `object`   |
|  `styleTimeFlatList`         |   optional        | Regular react style prop                                           | `object`   |
|  `onDateSelect`         |   optional        | [Basic](#basic)                                                    | `function` |
|  `onTimeSelect`         |   optional        | [Basic](#basic)                                                    | `function` |
|  `onDateTimeSelect`         |  optional         | [Basic](#basic)                                                    | `function` |

# How do you contribute

##### Git Clone 
```
git clone https://github.com/Ecancan/RNAppointmentCalendar.git
```
### Install packages

##### With Yarn
```
yarn install
yarn run dev
```

##### With Npm
```
npm install
npm run dev
```

### Install Example App (With Yarn)
```
cd example
yarn install
```

##### For IOS
```
yarn run pod
yarn run ios
```

##### For Android
```
yarn run android
```

# Note
If you see any bug or issue please open a issue or send a contribution. Thank you for your time on this module. :)
