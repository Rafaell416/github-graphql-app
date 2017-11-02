import React from 'react'
import {
  Platform
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'


export const Application = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'GitHub Explorer',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 25 : 0,
      }
    })
  }
})
