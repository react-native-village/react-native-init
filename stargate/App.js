import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from './src/components/uikit'

const url = 'http://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET'
      })
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      console.log('e', e)
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
