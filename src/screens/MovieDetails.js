import React from 'react';
import { View, Text } from 'react-native';

export const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <View>
      <Text>This is detail View {id}</Text>
    </View>
  )
}