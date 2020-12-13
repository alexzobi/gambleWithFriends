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
  const [error, setError] = useState('');
  const [reenterError, setReenterError] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validateReenter = () => {
    if (password !== passwordReenter) {
      setReenterError('Passwords must match');
      return false;
    }

    setReenterError('');
    return true;
  }

  const validatePassword = () => {
    const minLength = password.length >= 8;
    const hasLower = password.match(/[a-z]+/);
    const hasUpper = password.match(/[A-Z]+/);
    const hasNumber = password.match(/[\d]+/);

    if (minLength && hasLower && hasNumber && hasUpper) {
      setError('');
      return true
    };

    setError('Password must include at least one uppercase, one lowercase letter and a number');

    return false;
  }

  const onLogin = () => {
    if (isSignup && (
      !validatePassword()
      || !validateReenter()
    )) {
      return;
    }

    dispatch(login(username, password));

    navigation.navigate("Home");
  }

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: Color.Primary.medium,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}
    >
      <TextInput
        autoCapitalize="none"
        onChangeText={setUserName}
        value={username}
        placeholder={isSignup ? "Pick a username" : "Username"}
        mb={24}
        />
      <TextInput
        autoCapitalize="none"
        mb={24}
        onChangeText={setPassword}
        value={password}
        placeholder={isSignup ? "Pick a password" : "Password"}
        type={isSignup ? "newPassword" : "password"}
        onBlur={isSignup ? validatePassword : undefined}
        errorMessage={error}
        />
      <Display when={isSignup}>
        <TextInput
          autoCapitalize="none"
          type="newPassword"
          onChangeText={setPasswordReenter}
          value={passwordReenter}
          placeholder="Re-enter your password"
          mb={24}
          errorMessage={reenterError}
          onBlur={validateReenter}
        />
      </Display>
      <Button
        mv={24}
        onPress={onLogin}
        label="Submit"
        color={Color.Primary.default}
        disabled={
          !username
          || !password
          || (isSignup && (!passwordReenter || passwordReenter !== password))
        }
      />
      <Text
        position="absolute"
        bottom={50}
        alignSelf="center"
        onPress={() => {
          setIsSignup(!isSignup)
          setPassword('')
          setReenterError('')
          setError('')
          setReenterError('')
        }} color="white"
      >
        {isSignup ? "Already have an account?" : "Need to sign up?"}
      </Text>
    </View>
  )
};

export default Component;
