export interface MarginProps {
  marginTop5?: boolean;
  marginTop10?: boolean;
  marginTop15?: boolean;
  marginTop20?: boolean;

  marginRight5?: boolean;
  marginRight10?: boolean;
  marginRight15?: boolean;
  marginRight20?: boolean;

  marginBottom5?: boolean;
  marginBottom10?: boolean;
  marginBottom15?: boolean;
  marginBottom20?: boolean;
  marginBottom25?: boolean;
  marginBottom30?: boolean;
  marginBottom35?: boolean;

  marginLeft5?: boolean;
  marginLeft10?: boolean;
  marginLeft15?: boolean;
  marginLeft20?: boolean;
}

export interface DynamicMarginProps {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

export interface SizeProps {
  width?: number | string;
  height?: number | string;
}

export interface FlexProps {
  flex?: number;
}

export interface ColorProps {
  bgColor?: string;
}

export interface PositionProps {
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface BaseViewProps extends DynamicMarginProps, SizeProps, FlexProps, ColorProps, PositionProps {
  radius?: number;
}
