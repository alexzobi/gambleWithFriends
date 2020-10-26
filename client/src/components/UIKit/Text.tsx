import React, { ComponentProps } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import Color from './Color';

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
  },
});

const SizeMap = {
  'x-small': 12,
  'small': 14,
  'large': 18,
  'x-large': 20
};

type SizeType = keyof typeof SizeMap | number;

interface TextPropType extends ComponentProps<typeof Text> {
  color?: string;
  size?: SizeType;
}

const Text = ({ color, size, ...props }: TextPropType) => (
  <RNText
  style={[
    styles.Text,
    { color: color ?? Color.Dark.default},
    size ? {
        fontSize: typeof size === "number" ? size : SizeMap[size],
      } : {},
    ]}
    {...props}
  />
);

export default Text;
