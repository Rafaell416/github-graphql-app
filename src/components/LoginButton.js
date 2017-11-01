import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { signInWithGitHub } from '../Auth/LoginWithGitHub'

export default class LoginButton extends Component {

  state = {
    result: null
  }

loginWihtGithub = () => {
  const navigation = this.props.navigation
   signInWithGitHub(navigation).then(result => this.setState({result}))
}

  render(){
    return(
      <TouchableOpacity style={styles.button} onPress={()=>this.loginWihtGithub()}>
        <View style={styles.btnContainer}>
          <Ionicons name='logo-github' size={30}  color='white'/>
          <Text style={styles.text}>Login With Github</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    height: 42,
    width: 250,
    borderRadius: 18,
    elevation: 5,
    backgroundColor: '#24292E',
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white',
     marginLeft: 10
  }
})
