import { Text } from 'react-native';
import styled from 'styled-components';

import { BaseTouchableOpacity, BaseView } from '../globalStyle';
import { isEmpty } from '../utils/commonUtil';

interface IStyledRNSlideCalendarDateCard {
  selectedDateBgColor?: string;
  selectedDateColor?: string;
  currentDateColor?: string;
}

interface IStyledRNSlideCalendarDateCardText {
  selectedDateColor?: string;
  currentDateColor?: string;
  fontSize: number;
}

export const StyledRNAppointmentCalendarContainer = styled(BaseView)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledDateCard = styled(BaseTouchableOpacity)<IStyledRNSlideCalendarDateCard>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: #fafafa;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 6px;
  ${(props) => !isEmpty(props.selectedDateBgColor) && `background-color:${props.selectedDateBgColor};`}
  ${(props) => !isEmpty(props.selectedDateColor) && `color:${props.selectedDateColor};`}
`;

export const BaseCardDateText = styled(Text)<IStyledRNSlideCalendarDateCardText>`
  ${(props) => !isEmpty(props.fontSize) && `font-size: ${props.fontSize}px;`}
  ${(props) => !isEmpty(props.selectedDateColor) && `color: ${props.selectedDateColor};`}
  ${(props) =>
    !isEmpty(props.currentDateColor) && isEmpty(props.selectedDateColor) && `color: ${props.currentDateColor};`}
`;

export const TimeCardContainer = styled(BaseTouchableOpacity)<IStyledRNSlideCalendarDateCard>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: #fafafa;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 6px;
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
  ${(props) => !isEmpty(props.selectedDateBgColor) && `background-color:${props.selectedDateBgColor};`}
`;
