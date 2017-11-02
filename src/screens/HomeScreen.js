import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
}from 'react-native'
import Search from 'react-native-search-box'
import { graphql, gql, withApollo } from 'react-apollo'


class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      word: '',
      repos: []
    }
  }

  _executeSearch = async () => {
    const {word} = this.state
    const result = await this.props.client.query({
      query: REPO_QUERY,
      variables: { keyword: word }
    })
    console.warn(result)
    this.setState({
      repos: [...this.state.repos, result]
    })
  }

 render(){
   return(
     <View style={styles.container}>
       <Search
         ref="search_box"
         onChangeText={(word)=>this.setState({ word })}
         onSearch={()=>this._executeSearch()}
         blurOnSubmit={true}
       />
     </View>
   )
 }
}

const REPO_QUERY = gql`
  query searchRepoByKeyworkd ($keyword: String!) {
    search(query: $keyword, type:REPOSITORY, first:30){
      repositoryCount
      edges{
        node {
          ... on Repository {
            name
            description
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
