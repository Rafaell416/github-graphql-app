import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
}from 'react-native'
import LoginButton from '../components/LoginButton'

export default class Login extends Component {

 render(){
   return(
     <View style={styles.container}>
       <Text style={styles.text}>Welcome To Aurity's GitHub Explorer</Text>
       <LoginButton goHome={this.navigateToHome}/>
     </View>
   )
 }

 navigateToHome = () => {
   this.props.navigation.navigate('HomeScreen')
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 18,
    marginBottom: 20
  }
})
