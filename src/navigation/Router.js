import React from 'react'
import {
  Platform
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'


export const AppNavigation = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false
    })
  },
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
