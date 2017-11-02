import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
}from 'react-native'
import Search from 'react-native-search-box'
import { graphql, gql, withApollo } from 'react-apollo'
import UsersList from '../components/UsersList'

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      word: '',
      users: [],
      visible: false,
      filteredUsers: []
    }
  }

  _executeSearch = async () => {
    const {word} = this.state
    const result = await this.props.client.query({
      query: REPO_QUERY,
      variables: { keyword: word }
    })
    const data = result.data.search.edges
    this.setState({
      users: data,
      visible: true
    })
  }


 render(){
   const users = this.state.users
   console.warn(users)
   return (
     <View style={styles.container}>
       <Search
         ref="search_box"
         onChangeText={(word)=>this.setState({ word })}
         onSearch={()=>this._executeSearch()}
         blurOnSubmit={true}
       />
       {
         this.state.visible ? <UsersList users={users} navigation={this.props.navigation}/> : null
       }
     </View>
   )

 }
}

const REPO_QUERY = gql`
  query searchRepoByKeyworkd ($keyword: String!) {
    search(query: $keyword, type:USER, first:5){
      edges{
        node {
          ... on User {
            name
            bio
            avatarUrl
            location
            email
           websiteUrl
            repositories (first: 100) {
              edges {
                node {
                  name,
                  id
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`

export default withApollo(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
