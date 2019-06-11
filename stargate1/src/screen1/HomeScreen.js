import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../components/uikit'
import { STARGATE_DETAILS } from '../routes'
import { WHITE, BLUE } from '../../constants'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class Main extends Component {
  state = {
    title: 'STAR GATE',
    data: []
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

  onGoBack = someDataFromChildren => {
    console.log('someDataFromChildren', someDataFromChildren) //eslint-disable-line
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    return (
      <View>
        <Header
          title={title}
          headerColor={BLUE}
          onPress={() => navigation.openDrawer()}
          leftIcon="ios-menu"
          leftColor={WHITE}
        />
        <Layout>
          {data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, { show: item.show, onGoBack: this.onGoBack })}
            />
          ))}
        </Layout>
      </View>
    )
  }
}
