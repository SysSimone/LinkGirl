import React from 'react';
import { View, Text } from 'react-native';

import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinks() {
  return (
    <View>
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#FF8000"
      />
      <Text> Página Links</Text>
    </View>
  )
}