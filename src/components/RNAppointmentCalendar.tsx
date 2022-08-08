import moment from 'moment';
import React, { FC, useMemo, useState } from 'react';
import { FlatList } from 'react-native';

import { BaseCardDateText, StyledDateCard, StyledRNAppointmentCalendarContainer } from './rnAppointmentCalendarStyle';

export interface IDates {
  id: string;
  day: string;
  month: string;
  year: string;
  isCurrentDate: boolean;
  isSelected: boolean;
}

export interface IRNSlideCalendar {
  initialDate?: Date;
  onSelect?: (date) => void;
  monthRange?: number;
}

export const RNAppointmentCalendar: FC<IRNSlideCalendar> = (props) => {
  //Variables
  const { initialDate = moment().toDate(), onSelect, monthRange = 11 } = props;
  const date = moment().toDate();
  const dateFormat = 'YYYY-M-D';
  const initialMonth = initialDate.getMonth();
  const initialYear = initialDate.getFullYear();

  // States
  const [activeDate, setActiveDate] = useState(initialDate);

  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isSelectedDate = ({ date, day, month, year }) => {
    return moment(date).format(dateFormat) === `${year}-${month}-${day}`;
  };

  const generateCalendar = useMemo(() => {
    let dates: Array<IDates> | undefined = [];
    let year: number = initialYear;

    for (let m = initialMonth - 1; m <= initialMonth + monthRange; m++) {
      const monthIndex = m - 11 >= 0 ? m - 11 : m;
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

    return dates;
  }, [initialDate, activeDate]);

  const renderItem = ({ item }) => {
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

  return (
    <StyledRNAppointmentCalendarContainer>
      <FlatList data={generateCalendar} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal={true} />
    </StyledRNAppointmentCalendarContainer>
  );
};
