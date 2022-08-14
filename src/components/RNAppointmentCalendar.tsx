import moment from 'moment';
import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View, ViewStyle } from 'react-native';

import { isEmpty, isNil } from '../utils/commonUtil';
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
  isDisabled: boolean;
}

export interface ITimes {
  id: string;
  time: string;
  isSelected: boolean;
  isBooked: boolean;
  isDisabled: boolean;
}

export interface IColors {
  selectedBgColor?: string;
  selectedColor?: string;
  currentDateColor?: string;
  disableOpacity?: number;
}

export interface IDateCardPosition {
  key: 'dayOfWeek' | 'day' | 'month' | 'year';
  isVisible: boolean;
  fontSize: number;
}

export interface IRNSlideCalendar {
  date?: Date | string;
  format?: string;
  includeTimes?: any;
  disabledDates?: Array<string>;
  bookedTimes?: any;
  selectedTimes?: any;
  monthRange?: number;
  timeInterval?: 15 | 30 | 45 | 60;
  withTimes?: boolean;
  isMultipleTimeSelect?: boolean;
  unSelectedTimeComponent?: ReactNode;
  colors?: IColors;
  dateCardPositions?: Array<IDateCardPosition>;
  styleDateFlatList?: ViewStyle;
  styleTimeFlatList?: ViewStyle;
  onDateSelect?: (date: string) => void;
  onTimeSelect?: (time: (string | undefined)[] | string) => void;
  onDateTimeSelect?: (dateTime: ('' | undefined | string)[] | string) => void;
}

export const RNAppointmentCalendar: FC<IRNSlideCalendar> = (props) => {
  //Variables
  const {
    date = moment().toDate(),
    format = 'YYYY-MM-DD HH:mm',
    includeTimes,
    disabledDates,
    bookedTimes,
    selectedTimes,
    monthRange = 1,
    timeInterval = 30,
    withTimes = true,
    isMultipleTimeSelect = false,
    unSelectedTimeComponent,
    colors,
    dateCardPositions,
    styleDateFlatList,
    styleTimeFlatList,
    onDateSelect,
    onTimeSelect,
    onDateTimeSelect
  } = props;

  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const _date = moment().toDate();
  const _dateFormat = 'YYYY-MM-DD';
  const initialMonth = _date.getMonth();
  const initialYear = _date.getFullYear();

  // States
  const [activeDate, setActiveDate] = useState<Date | string | undefined>(
    !disabledDates?.includes(moment(date).format(_dateFormat).toString()) ? date : undefined
  );
  const [activeTime, setActiveTime] = useState<string | undefined | Array<string | undefined>>(
    (activeDate && (isMultipleTimeSelect ? [moment(date).format('HH:mm')] : moment(date).format('HH:mm'))) || undefined
  );

  // Functions
  const isSelectedDate = ({ date, day, month, year }) => {
    return moment(date).format(_dateFormat) === moment(`${year}-${month}-${day}`).format(_dateFormat);
  };

  const getValueAccordingByMultipleSelecting = ({
    value,
    prev
  }: {
    value: string | undefined;
    prev?: string | (string | undefined)[] | undefined;
  }) => {
    return isMultipleTimeSelect && prev && typeof prev !== 'string' ? [...prev, value] : value;
  };

  const handleDatePress = ({ item }) => {
    const itemDate = moment(`${item.year}-${item.month}-${item.day}`, _dateFormat).toDate();
    setActiveDate(itemDate);
    setActiveTime(getValueAccordingByMultipleSelecting({ value: undefined, prev: [] }));
  };

  const handleSetActiveTime = (prev: string | Array<string | undefined> | undefined, item: string) => {
    if (Array.isArray(prev) && prev.some((_item) => _item === item)) {
      return prev?.filter((_item) => _item !== item);
    }

    return getValueAccordingByMultipleSelecting({ value: item, prev });
  };

  const handleTimePress = ({ time }: { time: string }) => {
    if (typeof activeTime !== 'string') {
      setActiveTime((prev) => handleSetActiveTime(prev, time));
      return;
    }

    setActiveTime((prev) => getValueAccordingByMultipleSelecting({ value: time, prev }));
  };

  const isBookedTime = useMemo(
    () => bookedTimes && bookedTimes[moment(activeDate).format(_dateFormat)],
    [activeDate, bookedTimes]
  );

  const isSelectedTime = useMemo(
    () => selectedTimes && selectedTimes[moment(activeDate).format(_dateFormat)],
    [activeDate, selectedTimes]
  );

  const checkSelectedTime = ({ time }: { time: string }) => {
    if (isMultipleTimeSelect) {
      return activeTime?.includes(time) || isSelectedTime?.includes(time);
    }
    return activeTime === time || (Array.isArray(isSelectedTime) && isSelectedTime[0] === time) || false;
  };

  const getSelectedDateTimes = () => {
    if (Array.isArray(activeTime)) {
      return activeTime
        .map((time) => {
          return time && moment(`${moment(activeDate).format(_dateFormat)} ${time}`).format(format);
        })
        .filter((time) => !isEmpty(time));
    }

    return moment(`${moment(activeDate).format(_dateFormat)} ${activeTime}`).format(format);
  };

  const generateCalendar = useMemo(() => {
    const dates: Array<IDates> | undefined = [];
    let year: number = initialYear;

    for (let m = initialMonth; m <= initialMonth + monthRange; m++) {
      const monthIndex = m - 12 >= 0 ? m - 12 : m;
      const month = m - 11 > 0 ? m - 11 : m + 1;
      const getDays = days[monthIndex];
      year = monthIndex === 0 ? year + 1 : year;

      for (let i = 1; i <= getDays; i++) {
        const parsedDay = `0${i.toString()}`.slice(-2);
        const parsedMonth = `0${month.toString()}`.slice(-2);

        const isDisabled =
          (disabledDates &&
            disabledDates?.includes(moment(`${year}-${parsedMonth}-${parsedDay}`).format(_dateFormat).toString())) ||
          false;

        const isCurrentDate = !isDisabled
          ? isSelectedDate({ date: _date, day: parsedDay, month: parsedMonth, year })
          : false;

        const isSelected = !isDisabled
          ? isSelectedDate({ date: activeDate, day: parsedDay, month: parsedMonth, year })
          : false;

        dates.push({
          id: `${m}${i}`,
          day: parsedDay,
          month: parsedMonth,
          year: year.toString(),
          isCurrentDate,
          isSelected,
          isDisabled
        });
      }
    }

    return dates.slice(moment().toDate().getDate() - 1, dates.length);
  }, [activeDate]);

  const getTimeRanges = useCallback(
    (interval: number) => {
      const ranges: Array<ITimes> = [];
      const date = moment().toDate();

      for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
        date.setHours(0);
        date.setMinutes(minutes);
        const time = moment(date).format('HH:mm').toString();
        ranges.push({
          id: minutes.toString(),
          time,
          isSelected: checkSelectedTime({ time }),
          isBooked: isBookedTime?.includes(time) || false,
          isDisabled: (includeTimes && !includeTimes[moment(activeDate).format(_dateFormat)]?.includes(time)) || false
        });
      }

      return ranges;
    },
    [activeDate, activeTime]
  );

  // Hooks
  useEffect(() => {
    activeDate && onDateSelect?.(moment(activeDate).format(format));
  }, [activeDate]);

  useEffect(() => {
    activeTime && onTimeSelect?.(Array.isArray(activeTime) ? activeTime.filter((time) => !isEmpty(time)) : activeTime);
  }, [activeTime]);

  useEffect(() => {
    activeTime && onDateTimeSelect?.(getSelectedDateTimes());
  }, [activeDate, activeTime]);

  const renderDateItem = ({ item }) => {
    const { year, month, day, isSelected, isDisabled, isCurrentDate } = item;

    return (
      <StyledDateCard
        selectedBgColor={colors?.selectedBgColor}
        isSelected={isSelected}
        disabled={isDisabled}
        disableOpacity={colors?.disableOpacity}
        onPress={() => handleDatePress({ item })}
      >
        {dateCardPositions?.map(
          (_item, _index) =>
            _item.isVisible && (
              <BaseCardDateText
                key={_index}
                fontSize={_item.fontSize}
                isSelected={isSelected}
                selectedColor={colors?.selectedColor}
                isCurrentDate={isCurrentDate}
                currentDateColor={colors?.currentDateColor}
              >
                {_item.key === 'dayOfWeek'
                  ? moment(`${year}-${month}-${day}`, _dateFormat).format('dd').toString()
                  : item[_item.key]}
              </BaseCardDateText>
            )
        )}
      </StyledDateCard>
    );
  };

  const renderTimeItem = ({ item }) => {
    const { time, isSelected, isDisabled, isBooked } = item;

    return (
      <TimeCardContainer
        onPress={() => handleTimePress({ time })}
        isSelected={isSelected}
        selectedBgColor={colors?.selectedBgColor}
        isBooked={isBooked}
        disabled={isDisabled}
        disableOpacity={colors?.disableOpacity}
      >
        <BaseCardDateText fontSize={12} isSelected={isSelected} selectedColor={colors?.selectedColor}>
          {time}
        </BaseCardDateText>
      </TimeCardContainer>
    );
  };

  return (
    <StyledRNAppointmentCalendarContainer>
      <>
        <FlatList
          data={generateCalendar}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{
            marginBottom: 30,
            flexGrow: 0,
            ...styleDateFlatList
          }}
        />
      </>
      {withTimes && (
        <>
          {!isNil(activeDate) ? (
            <FlatList
              data={getTimeRanges(timeInterval)}
              numColumns={3}
              renderItem={renderTimeItem}
              horizontal={false}
              keyExtractor={(item) => item.id}
              style={{ ...styleTimeFlatList }}
            />
          ) : !isEmpty(unSelectedTimeComponent) ? (
            { unSelectedTimeComponent }
          ) : (
            <View>
              <Text>Not have any selected date.</Text>
            </View>
          )}
        </>
      )}
    </StyledRNAppointmentCalendarContainer>
  );
};

RNAppointmentCalendar.defaultProps = {
  colors: {
    selectedBgColor: '#328ae8',
    selectedColor: '#FFFFFF',
    currentDateColor: '#328ae8',
    disableOpacity: 0.5
  },
  dateCardPositions: [
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
    },
    {
      key: 'year',
      isVisible: true,
      fontSize: 10
    }
  ]
};
