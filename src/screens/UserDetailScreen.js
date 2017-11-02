import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
}from 'react-native'
import RepoList from '../components/RepoList'

export default class UserDetailScreen extends Component {
  render(){
    const { name, avatarUrl, email, websiteUrl, bio} = this.props.navigation.state.params.node
    const repos = this.props.navigation.state.params.node.repositories.edges
    return(
      <View style={styles.container}>
        <View style={styles.userInfo}>
            <View>
              <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            </View>
            <View style={styles.datainfo}>
              <Text style={styles.name}>{name}</Text>
              <Text>{bio}</Text>
              <Text>{email}</Text>
              <Text>{websiteUrl}</Text>
            </View>
        </View>
        <View style={styles.reposTile}>
          <Text style={styles.reposNumber}>{repos.length || 0} Repositories</Text>
        </View>
        <View style={styles.repo}>
           <RepoList repos={repos}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  userInfo: {
    flexDirection: 'row',
    height: 140,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 10
  },
  datainfo: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 5,
    marginLeft: 3,
    height: 120
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  reposNumber: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  reposTile: {
    backgroundColor: '#ecf0f1',
    alignItems: 'center'
  },
  repo: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  }
})
