import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import authenticateWithGithubAsync from '../Auth/authenticateWithGithubAsync'

// const storage = new Storage({
//   size: 1000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
// })
//
// global.storage = storage

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
      this.props.goHome
      this._saveToken(result)
    } catch(e) {
      this.setState({error: JSON.stringify(e)})
    }
  }

  _saveToken = (token) => {
    console.log(token)
    storage.save({
      key: 'AuthToken',
      data: {
        token
      }
    })
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
