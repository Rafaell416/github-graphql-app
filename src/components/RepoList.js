import React, { Component } from 'react'
import {
  ListView,
  View,
  TouchableOpacity
 } from 'react-native'

import RepoCard from './RepoCard'

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
    this.updateDataSource(this.props.repos)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.repos !== this.props.repos) {
      this.transform(newProps.repos)
   }
  }

  transform = (data) => {
    this.updateDataSource(data)
  }


  render(){
    return (
      <ListView
        enableEmptySections = { true }
        dataSource={this.state.dataSource}
        renderRow={(repo) => <RepoCard repo={repo} />}
          removeClippedSubviews={false}
        />
    )

  }
}
