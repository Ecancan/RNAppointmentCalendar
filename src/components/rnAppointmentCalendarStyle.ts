import styled from 'styled-components';

import { BaseTouchableOpacity, BaseView } from '../globalStyle';
import { isEmpty } from '../utils/commonUtil';

interface IStyledRNSlideCalendarDateCard {
  selectedBgColor?: string;
  selectedColor?: string;
}

export const StyledRNAppointmentCalendarContainer = styled(BaseView)`
  display: flex;
  width: 100%;
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
  ${(props) => !isEmpty(props.selectedBgColor) && `background-color:${props.selectedBgColor};`}
`;
