import React from 'react';

import { View, Text, ScrollView,} from '../../components/UIKit';

type Props = {

}

const Bets = ({}: Props) => (
  <ScrollView style={{ paddingHorizontal: 24, paddingVertical: 40 }}>
    <Text type="title">Bets</Text>
  </ScrollView>
);

export default Bets;
