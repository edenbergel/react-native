import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {getMovieDetailsFromApiAsync} from '../services/nettwork';

export const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;

  useEffect(() => {
    getMovieDetailsFromApiAsync(id).then(data => {
      console.log(data);
    })
  }, [])
  return (
    <View>
      <Text>This is detail View {id}</Text>
    </View>
  )
}