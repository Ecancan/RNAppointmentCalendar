// Styles
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

import { BaseViewProps } from './common/styleInterfaces';
import { isNil } from './utils/commonUtil';

export const BaseTouchableOpacity = styled(TouchableOpacity)<BaseViewProps>`
  ${(props) => !isNil(props.m) && `margin:${props.m}px;`}
  ${(props) => !isNil(props.mx) && `margin-horizontal:${props.mx}px;`}
  ${(props) => !isNil(props.my) && `margin-vertical:${props.my}px;`}
  ${(props) => !isNil(props.mt) && `margin-top:${props.mt}px;`}
  ${(props) => !isNil(props.mb) && `margin-bottom:${props.mb}px;`}
  ${(props) => !isNil(props.ml) && `margin-left:${props.ml}px;`}
  ${(props) => !isNil(props.mr) && `margin-right:${props.mr}px;`}

  ${(props) => !isNil(props.p) && `padding:${props.p}px;`}
  ${(props) => !isNil(props.px) && `padding-horizontal:${props.px}px;`}
  ${(props) => !isNil(props.py) && `padding-vertical:${props.py}px;`}
  ${(props) => !isNil(props.pt) && `padding-top:${props.pt}px;`}
  ${(props) => !isNil(props.pb) && `padding-bottom:${props.pb}px;`}
  ${(props) => !isNil(props.pl) && `padding-left:${props.pl}px;`}
  ${(props) => !isNil(props.pr) && `padding-right:${props.pr}px;`}
  
  ${(props) => !isNil(props.radius) && `border-radius:${props.radius}px;`}
  ${(props) => !isNil(props.width) && `width:${props.width};`}
  ${(props) => !isNil(props.height) && `height:${props.height};`}
  ${(props) => !isNil(props.flex) && `flex:${props.flex};`}
  
  ${(props) => !isNil(props.bgColor) && `background-color:${props.bgColor};`}
  ${(props) => !isNil(props.position) && `position:${props.position};`}
  ${(props) => !isNil(props.top) && `top:${props.top};`}
  ${(props) => !isNil(props.bottom) && `bottom:${props.bottom};`}
  ${(props) => !isNil(props.left) && `left:${props.left};`}
  ${(props) => !isNil(props.right) && `right:${props.right};`}
`;

export const BaseView = styled(View)<BaseViewProps>`
  ${(props) => !isNil(props.m) && `margin:${props.m}px;`}
  ${(props) => !isNil(props.mx) && `margin-horizontal:${props.mx}px;`}
  ${(props) => !isNil(props.my) && `margin-vertical:${props.my}px;`}
  ${(props) => !isNil(props.mt) && `margin-top:${props.mt}px;`}
  ${(props) => !isNil(props.mb) && `margin-bottom:${props.mb}px;`}
  ${(props) => !isNil(props.ml) && `margin-left:${props.ml}px;`}
  ${(props) => !isNil(props.mr) && `margin-right:${props.mr}px;`}

  ${(props) => !isNil(props.p) && `padding:${props.p}px;`}
  ${(props) => !isNil(props.px) && `padding-horizontal:${props.px}px;`}
  ${(props) => !isNil(props.py) && `padding-vertical:${props.py}px;`}
  ${(props) => !isNil(props.pt) && `padding-top:${props.pt}px;`}
  ${(props) => !isNil(props.pb) && `padding-bottom:${props.pb}px;`}
  ${(props) => !isNil(props.pl) && `padding-left:${props.pl}px;`}
  ${(props) => !isNil(props.pr) && `padding-right:${props.pr}px;`}
  
  ${(props) => !isNil(props.radius) && `border-radius:${props.radius}px;`}
  ${(props) => !isNil(props.width) && `width:${props.width};`}
  ${(props) => !isNil(props.height) && `height:${props.height};`}
  ${(props) => !isNil(props.flex) && `flex:${props.flex};`}
  
  ${(props) => !isNil(props.bgColor) && `background-color:${props.bgColor};`}
  ${(props) => !isNil(props.position) && `position:${props.position};`}
  ${(props) => !isNil(props.top) && `top:${props.top};`}
  ${(props) => !isNil(props.bottom) && `bottom:${props.bottom};`}
  ${(props) => !isNil(props.left) && `left:${props.left};`}
  ${(props) => !isNil(props.right) && `right:${props.right};`}
`;
