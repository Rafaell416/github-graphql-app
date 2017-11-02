import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
}from 'react-native'

export default class HomeScreen extends Component {

 render(){
   const {navigate} = this.props.navigation
   return(
     <View style={styles.container}>
       <Text>HELLO HOME</Text>
       <Button
         title="Go to Login"
          onPress={() =>
            navigate('LoginScreen')
          }
       />
     </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
