import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';

import { View, Text, Color, TextInput, Display } from '../../components/UIKit';

type Props = {

}

const Component = ({}: Props) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReenter, setPasswordReenter] = useState('');
  const [isSignup, setIsSignup] = useState(false);

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
      <Text onPress={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account?" : "Need to sign up?"}
      </Text>
    </View>
  )
};

export default Component;
