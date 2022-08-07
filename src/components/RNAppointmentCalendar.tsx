import moment from 'moment';
import React, { FC, useMemo, useState } from 'react';
import { FlatList, Text } from 'react-native';

import { StyledDateCard, StyledRNAppointmentCalendarContainer } from './rnAppointmentCalendarStyle';

export interface IDates {
  id: string;
  day: string;
  month: string;
  year: string;
  selected: boolean;
}

export interface IRNSlideCalendar {
  initialDate?: Date;
  onSelect?: (date) => void;
  monthRange?: number;
}

export const RNAppointmentCalendar: FC<IRNSlideCalendar> = (props) => {
  //Variables
  const { initialDate = moment().toDate(), onSelect, monthRange = 11 } = props;
  const dateFormat = 'YYYY-M-D';
  const initialMonth = initialDate.getMonth();
  const initialYear = initialDate.getFullYear();

  // States
  const [activeDate, setActiveDate] = useState(initialDate);

  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isSelectedDate = ({ day, month, year }) => {
    return moment(activeDate).format(dateFormat) === `${year}-${month}-${day}`;
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
          selected: isSelectedDate({ day, month, year })
        });
      }
    }

    return dates;
  }, [initialDate, activeDate]);

  const renderItem = ({ item }) => {
    return (
      <StyledDateCard
        selectedBgColor={item.selected && '#328ae8'}
        onPress={() => {
          setActiveDate(
            moment(`${item.year.toString()}-${item.month.toString()}-${item.day.toString()}`, dateFormat).toDate()
          );
        }}
      >
        <Text>
          {moment(`${item.year.toString()}-${item.month.toString()}-${item.day.toString()}`, dateFormat)
            .format('dd')
            .toString()}
        </Text>
        <Text>{item.day.toString()}</Text>
      </StyledDateCard>
    );
  };

  return (
    <StyledRNAppointmentCalendarContainer>
      <FlatList data={generateCalendar} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal={true} />
    </StyledRNAppointmentCalendarContainer>
  );
};
