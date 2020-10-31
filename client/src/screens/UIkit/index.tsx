import React from 'react';

import { View, Text, Color, ScrollView, SafeAreaView } from '../../components/UIKit';

type Props = {

}

const UIKit = ({}: Props) => (
  <SafeAreaView>
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 40,
      }}>
      <Text>This is a text component</Text>
    </ScrollView>
  </SafeAreaView>
);

export default UIKit;
