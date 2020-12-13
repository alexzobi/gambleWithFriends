import React, { ComponentProps } from 'react';
import { TextInput as RNTextInput} from 'react-native';

import Text from '../Text/Text';
import Positioner, { PositionProps } from '../Positioner/Positioner';
import View from '../View';
import Color from '../Color';
import Display from '../Display';

import styles from './styles';

type Type = 'password' | 'newPassword' | 'emailAddress' | 'none'
interface Props extends PositionProps {
  onChangeText: (text: string) => void;
  value: string;
  fontSize?: number;
  type?: Type;
  placeholder?: string;
  errorMessage?: string;
  onBlur?: () => void;
  autoCapitalize?: ComponentProps<typeof RNTextInput>['autoCapitalize'];
}

const TextInput = ({
  onChangeText,
  value,
  type = 'none',
  placeholder,
  fontSize = 28,
  errorMessage,
  onBlur,
  autoCapitalize,
  ...positionProps
}: Props) => (
  <Positioner {...positionProps} width="100%">
    <View
      style={[
        styles.Input,
        {
          borderColor: errorMessage && 'red',
          borderWidth: errorMessage ? 2 : 0,
        }
      ]}>
      <RNTextInput
        autoCapitalize={autoCapitalize}
        value={value}
        secureTextEntry={type === 'password' || type === 'newPassword'}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Color.Dark.light}
        style={[
          styles.Input_TextInput,
          {
            fontSize,
          }
        ]}
      />
    <Display when={!!errorMessage}>
      <Text
        mt={6}
        type="footnote"
        color={Color.Error.default}
      >
        {errorMessage}
      </Text>
    </Display>
    </View>
  </Positioner>
);

export default TextInput;
