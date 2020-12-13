import React from 'react';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text/Text';
import Positioner, { PositionProps } from '../Positioner/Positioner';
import Color from '../Color';

const sizeMap = {
  small: 30,
  medium: 48,
  large: 66,
}

interface Props extends PositionProps {
  label: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  size?: keyof typeof sizeMap;
  borderRadius?: number;
  disabled?: boolean;
}

const Component = ({
  label,
  onPress,
  textColor = 'white',
  color = Color.Primary.default,
  size = 'medium',
  borderRadius,
  disabled = false,
  ...positionProps
}: Props) => (
  <Positioner {...positionProps}>
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        paddingHorizontal: sizeMap[size] / 2,
        height: sizeMap[size],
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius ?? sizeMap[size] / 2,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text
        color={textColor}
        fontSize={borderRadius ?? sizeMap[size] / 2}
      >
        {label}
      </Text>
   </TouchableOpacity>
  </Positioner>
);

export default Component;
