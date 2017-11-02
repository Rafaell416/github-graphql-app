import React from 'react'
import {
  Platform
} from 'react-native'
import {
  StackNavigator,
  TabNavigator
 } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import RepoScreen from '../screens/RepoScreen'
import UserScreen from '../screens/UserScreen'


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

export const Tabs = TabNavigator({
  Repos: {
    screen: RepoScreen
  },
  Users: {
    screen: UserScreen
  }
})
