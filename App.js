import React, {Component} from 'react'
import {
  Text
} from 'react-native'
import {Application} from './src/navigation/Router'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import authenticateWithGithubAsync from './src/Auth/authenticateWithGithubAsync'

const TOKEN = null

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    req.options.headers.authorization = `Bearer ${TOKEN}`
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

export default class App extends Component {

  _authenticateWithGithubAsync = async () => {
    try {
      let result = await authenticateWithGithubAsync()
      return result
    } catch(e) {
      this.setState({error: JSON.stringify(e)})
    }
  }

  componentWillMount(){
    this._authenticateWithGithubAsync()
        .then((token) => {
          TOKEN = token
        })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Application />
      </ApolloProvider>
    )
  }
}
