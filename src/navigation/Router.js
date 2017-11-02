import React from 'react'
import {
  Platform
} from 'react-native'
import {
  StackNavigator,
 } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import UserDetailScreen from '../screens/UserDetailScreen'


export const Application = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'GitHub User Explorer',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 25 : 0,
      }
    })
  },
  UserDetails: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'UserDetail',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 25 : 0,
      }
    })
  }
})
