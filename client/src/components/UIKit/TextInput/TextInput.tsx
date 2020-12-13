import React from 'react';
import { TextInput } from 'react-native';

import Text from '../Text/Text';
import Positioner, { PositionProps } from '../Positioner/Positioner';
import View from '../View';
import Color from '../Color';

import styles from './styles';

type Type = 'password' | 'email' | 'number' | 'text'

interface Props extends PositionProps {
  onChangeText: (text: string) => void;
  value: string,
  fontSize?: number,
  type?: Type,
  placeholder?: string,
}

const Component = ({
  onChangeText,
  value,
  type,
  placeholder,
  fontSize = 28,
  ...positionProps
}: Props) => (
  <Positioner {...positionProps} width="100%">
    <View style={styles.Input}>
      <TextInput
        value={value}
        style={[
          styles.Input_TextInput,
          {
            fontSize,
          }
        ]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Color.Dark.light}
      />
    </View>
  </Positioner>
);

export default Component;
