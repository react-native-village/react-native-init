import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { 
  searchChanged,
  getMovies
} from '../actions'
import { Header, Layout, ImageCard, Search } from '../components/uikit'
import {
  STARGATE_DETAILS
} from '../routes'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

class HomeScreen extends Component {
  state = {
    data: [],
    visibleSearchbar: false
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  onSearchChange = (text) => {
    this.props.searchChanged(text)
    this.props.getMovies(text)
  }

  render() {
    const { visibleSearchbar } = this.state
    const { navigation, movie, data } = this.props
    //console.log('this.props', this.props)
    return (
      <View>
        { visibleSearchbar ?
          <Search
            colorRight={'#fff'}
            iconRight="magnify"
            placeholder="Search"
            onChangeText={this.onSearchChange}
            value={movie}
            onPressRight={() => this.setState({ visibleSearchbar: false })}
            onBlur={() => this.setState({ visibleSearchbar: false })}
          /> :
          <Header
            title={movie ? movie : 'Search'} 
            colorRight={'#fff'}
            iconRight="magnify"
            onPressRight={() => this.setState({ visibleSearchbar: true })}
          /> 
        }
        <Layout>
          { data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show }))}
            />
          ))}
        </Layout>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}

export default connect(mapStateToProps, { searchChanged, getMovies })(HomeScreen)
