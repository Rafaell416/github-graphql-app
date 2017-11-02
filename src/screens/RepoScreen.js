import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
}from 'react-native'

export default class RepoScreen extends Component {
  render(){
    const repos = this.props.screenProps
    console.warn(repos)
    return(
      <View style={styles.container}>
        <Text>REPOOOOOSSS</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
