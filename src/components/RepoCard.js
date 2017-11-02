import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'


export default class RepoCard extends Component {
  render(){
    const { name, id, description} = this.props.repo.node
    return(
      <View style={styles.card} key={id}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,
    height: 70,
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: '#ecf0f1',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 19
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  info: {
    marginLeft: 10
  }
})
