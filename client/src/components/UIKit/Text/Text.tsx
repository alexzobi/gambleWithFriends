import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  Platform,
  LayoutChangeEvent,
  Text as RNText,
  TextStyle,
  TextProps,
} from 'react-native';

import Color from '../Color';
import Positioner, { PositionProps } from '../Positioner/Positioner';

import styles from './styles';

interface StyledProps extends PositionProps, TextProps {
  type: Type;
  style?: Partial<TextStyle>,
  weight?: TextStyle['fontWeight'];
  color?: string;
  onPress?: (evt: GestureResponderEvent, value?: string) => void;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  onLayout?: (e: LayoutChangeEvent) => void;
}

interface Props extends Omit<StyledProps, 'type'> {
  type?: Type;
  style?: any,
}

export type Type =
  'xxlarge'
  | 'xlarge'
  | 'large'
  | 'headline1'
  | 'headline2'
  | 'body1'
  | 'body2'
  | 'subhead'
  | 'footnote'
  | 'caption1'
  | 'caption2'
  | 'bottomNav'
  | 'title1'

const fontSizeMap = {
  xxlarge: 28,
  xlarge: 22,
  large: 18,
  headline1: 16,
  body1: 16,
  subhead: 15,
  headline2: 14,
  body2: 14,
  footnote: 13,
  caption1: 12,
  caption2: 11,
  bottomNav: 9,
  title1: 28,
};

const accessibilityMap = {
  xxlarge: 3.31,
  xlarge: 3.31,
  large: 3.31,
  headline1: 3.31,
  body1: 3.31,
  subhead: 3.27,
  headline2: 3.64,
  body2: 3.64,
  footnote: 3.38,
  caption1: 3.58,
  caption2: 3.63,
  bottomNav: 3.63,
  title1: 3.63,
};

const StyledText = ({
  type,
  weight,
  textAlign,
  lineHeight,
  color,
  style,
  ...props
}: StyledProps) => (
  <RNText
    style={[
      styles.Text,
      {
        fontSize: fontSizeMap[type],
        fontWeight: weight ?? (['headline1', 'headline2', 'title1'].includes(type) ? 'bold' : undefined),
        textAlign,
        lineHeight,
        color: color ?? Color.Dark.default,
        ...style,
      },
    ]}
    {...props}
  />
)

const Text = ({
  type = 'body1',
  m,
  mb,
  mt,
  mh,
  mv,
  ml,
  mr,
  weight,
  color,
  children,
  onPress,
  alignSelf,
  textAlign,
  lineHeight,
  position,
  top,
  left,
  bottom,
  right,
  style,
  onLayout,
  flex,
}: Props) => {
  function specificPlatfromText() {
    if (Platform.OS === 'android' && onPress) {
      return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
          <StyledText
            onLayout={onLayout}
            style={style}
            maxFontSizeMultiplier={accessibilityMap[type]}
            type={type}
            weight={weight}
            color={color}
            alignSelf={alignSelf}
            textAlign={textAlign}
            lineHeight={lineHeight}
          >
            {children}
          </StyledText>
        </TouchableOpacity>
      );
    }
    return (
      <StyledText
        onLayout={onLayout}
        style={style}
        maxFontSizeMultiplier={accessibilityMap[type]}
        type={type}
        weight={weight}
        color={color}
        alignSelf={alignSelf}
        textAlign={textAlign}
        lineHeight={lineHeight}
        onPress={onPress}
      >
        {children}
      </StyledText>
    );
  }
  return (
    <Positioner
      m={m}
      ml={ml}
      mr={mr}
      mv={mv}
      mt={mt}
      mb={mb}
      mh={mh}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      position={position}
      alignSelf={alignSelf}
      flex={flex}
    >
      {specificPlatfromText()}
    </Positioner>
  );
};

export default Text;
