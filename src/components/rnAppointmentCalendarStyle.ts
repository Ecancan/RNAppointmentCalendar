import { Text } from 'react-native';
import styled from 'styled-components';

import { BaseTouchableOpacity, BaseView } from '../globalStyle';
import { isEmpty } from '../utils/commonUtil';

interface IStyledRNSlideCalendarDateCard {
  selectedBgColor?: string;
  selectedColor?: string;
  currentDateColor?: string;
  disabled?: string;
  isBooked?: boolean;
  isSelected?: boolean;
  isCurrentDate?: boolean;
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
  ${(props) => !isEmpty(props.isSelected) && `background-color:${props.selectedBgColor};`}
  ${(props) => !isEmpty(props.disabled) && `opacity:0.5;`}
`;

export const BaseCardDateText = styled(Text)<IStyledRNSlideCalendarDateCardText>`
  ${(props) => !isEmpty(props.fontSize) && `font-size: ${props.fontSize}px;`}
  ${(props) => !isEmpty(props.isSelected) && `color: ${props.selectedColor};`}
  ${(props) => !isEmpty(props.isCurrentDate) && isEmpty(props.isSelected) && `color: ${props.currentDateColor};`}
`;

export const TimeCardContainer = styled(BaseTouchableOpacity)<IStyledRNSlideCalendarDateCard>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: #fafafa;
  border-width: 2px;
  border-color: #fafafa;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 6px;
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
  ${(props) => !isEmpty(props.isSelected) && `background-color:${props.selectedBgColor};`}
  ${(props) => !isEmpty(props.disabled) && `opacity:0.5;`}
  ${(props) => !isEmpty(props.isBooked) && `border-color: ${props.selectedBgColor};`}
`;
