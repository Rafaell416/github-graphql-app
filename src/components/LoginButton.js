import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import authenticateWithGithubAsync from '../Auth/authenticateWithGithubAsync'

export default class LoginButton extends Component {

  state = {
    githubToken: null,
    error: null
  }

  render(){
    return(
      <TouchableOpacity style={styles.button} onPress={this._authenticateWithGithubAsync}>
        <View style={styles.btnContainer}>
          <Ionicons name='logo-github' size={30}  color='white'/>
          <Text style={styles.text}>Login With Github</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _authenticateWithGithubAsync = async () => {
    try {
      let result = await authenticateWithGithubAsync()
      this.setState({githubToken: result})
      this.props.goHome()
    } catch(e) {
      this.setState({error: JSON.stringify(e)})
    }
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
