import React, { Component } from 'react'
import {
  ListView,
  View,
  TouchableOpacity
 } from 'react-native'

import UserCard from './UserCard'

export default class UsersList extends Component {

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  componentDidMount () {
    this.updateDataSource(this.props.users)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.users !== this.props.users) {
      this.transform(newProps.users)
   }
  }

  transform = (data) => {
    this.updateDataSource(data)
  }

  goUserDetails = (user) => {
    this.props.navigation.navigate('UserDetails', { ...user })
  }


  render(){
    return (
      <ListView
        enableEmptySections = { true }
        dataSource={this.state.dataSource}
        renderRow={(user) => {
          return(
            <TouchableOpacity onPress={() => this.goUserDetails(user)}>
              <UserCard user={user} />
            </TouchableOpacity>
            )
          }}
          removeClippedSubviews={false}
        />
    )

  }
}
