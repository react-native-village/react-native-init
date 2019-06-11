import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from './src/components/uikit'

const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json' // на github проблемы c запросом, поэтому ссылку поменял

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
      console.warn('e', e) // eslint-disable-line
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
