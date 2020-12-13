import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  View,
  Text,
  Color,
  TextInput,
  Display,
  Button,
} from '../../components/UIKit';

import { login } from '../../store/data/auth/actions';

type Props = {

}

const Component = ({}: Props) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReenter, setPasswordReenter] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogin = () => {
    dispatch(login(username, password));

    navigation.navigate("Home");
  }

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: Color.Primary.default,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}
    >
      <TextInput
        onChangeText={setUserName}
        value={username}
        placeholder={isSignup ? "Pick a username" : "Username"}
        mb={24}
        />
      <TextInput
        mb={24}
        onChangeText={setPassword}
        value={password}
        placeholder={isSignup ? "Pick a password" : "Password"}
      />
      <Display when={isSignup}>
        <TextInput
          onChangeText={setPasswordReenter}
          value={passwordReenter}
          placeholder="Re-enter your password"
          mb={24}
        />
      </Display>
      <Button
        mv={24}
        onPress={onLogin}
        label="Submit"
        color={Color.Primary.dark}
        disabled={
          !username
          || !password
          || (isSignup ? !passwordReenter : false)
        }
      />
      <Text
        position="absolute"
        bottom={50}
        alignSelf="center"
        onPress={() => setIsSignup(!isSignup)} color="white"
      >
        {isSignup ? "Already have an account?" : "Need to sign up?"}
      </Text>
    </View>
  )
};

export default Component;
