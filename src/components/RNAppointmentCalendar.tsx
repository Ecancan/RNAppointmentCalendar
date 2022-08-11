import moment from 'moment';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FlatList } from 'react-native';

import {
  BaseCardDateText,
  StyledDateCard,
  StyledRNAppointmentCalendarContainer,
  TimeCardContainer
} from './rnAppointmentCalendarStyle';

export interface IDates {
  id: string;
  day: string;
  month: string;
  year: string;
  isCurrentDate: boolean;
  isSelected: boolean;
}

export interface ITimes {
  id: string;
  time: string;
  isSelected: boolean;
  isBooked: boolean;
  isDisabled: boolean;
}

export interface IRNSlideCalendar {
  date?: Date;
  onSelect?: (date) => void;
  monthRange?: number;
}

export const RNAppointmentCalendar: FC<IRNSlideCalendar> = (props) => {
  //Variables
  const { date = moment().toDate(), onSelect, monthRange = 11 } = props;
  const _date = moment().toDate();
  const dateFormat = 'YYYY-M-D';
  const initialMonth = _date.getMonth();
  const initialYear = _date.getFullYear();

  // States
  const [activeDate, setActiveDate] = useState(date);

  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isSelectedDate = ({ date, day, month, year }) => {
    return moment(date).format(dateFormat) === `${year}-${month}-${day}`;
  };

  const generateCalendar = useMemo(() => {
    let dates: Array<IDates> | undefined = [];
    let year: number = initialYear;

    for (let m = initialMonth; m <= initialMonth + monthRange; m++) {
      const monthIndex = m - 12 >= 0 ? m - 12 : m;
      const month = m - 11 > 0 ? m - 11 : m + 1;
      const getDays = days[monthIndex];
      year = monthIndex === 0 ? year + 1 : year;

      for (let i = 1; i <= getDays; i++) {
        const day = i;
        dates.push({
          id: `${m}${day}`,
          day: `0${day.toString()}`.slice(-2),
          month: `0${month.toString()}`.slice(-2),
          year: year.toString(),
          isCurrentDate: isSelectedDate({ date, day, month, year }),
          isSelected: isSelectedDate({ date: activeDate, day, month, year })
        });
      }
    }

    return dates.slice(moment().toDate().getDate() - 1, dates.length);
  }, [activeDate]);

  const getTimeRanges = useCallback(
    (interval) => {
      const ranges: Array<ITimes> = [];
      const date = moment().toDate();

      for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
        date.setHours(0);
        date.setMinutes(minutes);
        ranges.push({
          id: minutes.toString(),
          time: moment(date).format('HH:mm').toString(),
          isSelected: false,
          isBooked: false,
          isDisabled: false
        });
      }

      return ranges;
    },
    [activeDate]
  );

  const renderDateItem = ({ item }) => {
    return (
      <StyledDateCard
        selectedDateBgColor={item.isSelected && '#328ae8'}
        onPress={() => {
          setActiveDate(moment(`${item.year}-${item.month}-${item.day}`, dateFormat).toDate());
        }}
      >
        <BaseCardDateText
          fontSize={12}
          selectedDateColor={item.isSelected && '#FFFFFF'}
          currentDateColor={item.isCurrentDate && '#328ae8'}
        >
          {moment(`${item.year}-${item.month}-${item.day}`, dateFormat).format('dd').toString()}
        </BaseCardDateText>
        <BaseCardDateText
          fontSize={20}
          selectedDateColor={item.isSelected && '#FFFFFF'}
          currentDateColor={item.isCurrentDate && '#328ae8'}
        >
          {item.day}
        </BaseCardDateText>
        <BaseCardDateText
          fontSize={14}
          selectedDateColor={item.isSelected && '#FFFFFF'}
          currentDateColor={item.isCurrentDate && '#328ae8'}
        >
          {item.month}
        </BaseCardDateText>
        <BaseCardDateText
          fontSize={10}
          selectedDateColor={item.isSelected && '#FFFFFF'}
          currentDateColor={item.isCurrentDate && '#328ae8'}
        >
          {item.year}
        </BaseCardDateText>
      </StyledDateCard>
    );
  };

  const renderTimeItem = ({ item }) => {
    return (
      <TimeCardContainer selectedDateBgColor={item.isSelected && '#328ae8'} onPress={() => console.log(item.time)}>
        <BaseCardDateText fontSize={12} selectedDateColor={item.isSelected && '#FFFFFF'}>
          {item.time}
        </BaseCardDateText>
      </TimeCardContainer>
    );
  };

  return (
    <StyledRNAppointmentCalendarContainer>
      <FlatList
        data={generateCalendar}
        renderItem={renderDateItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={{
          marginBottom: 30
        }}
      />
      <FlatList
        data={getTimeRanges(30)}
        numColumns={3}
        renderItem={renderTimeItem}
        horizontal={false}
        keyExtractor={(item) => item.id}
      />
    </StyledRNAppointmentCalendarContainer>
  );
};
