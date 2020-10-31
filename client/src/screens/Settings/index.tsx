import React from 'react';

import { View, Text, ScrollView,} from '../../components/UIKit';

type Props = {

}

const Component = ({}: Props) => (
  <ScrollView style={{ paddingHorizontal: 24, paddingVertical: 40 }}>
    <Text type="title">Settings</Text>
  </ScrollView>
);

export default Component;
