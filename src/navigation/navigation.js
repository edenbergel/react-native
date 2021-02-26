import React from 'react';
const Stack = createStackNavigator();
import { SearchScreen } from '../screens/SearchScreen';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Button } from 'react-native';
import { MovieDetails } from '../screens/MovieDetails';

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Film" 
        component={SearchScreen}
        options={{
          // headerLeft: (props) => (
          //   <HeaderBackButton 
          //     {...props}
          //     onPress={() => {

          //     }}
          //   />
          // ),
          // headerRight: (props) => (
          //   <Button title="Mon btn"></Button>
          // ),
          headerTransparent: true,
          headerBackground: () => (
            null
          ),
          title: null
        }}
      >
      </Stack.Screen>
      <Stack.Screen name="Details" component={MovieDetails}>

      </Stack.Screen>
    </Stack.Navigator>
  )
}