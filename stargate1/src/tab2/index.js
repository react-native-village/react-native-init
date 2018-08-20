import React, {Component} from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../components/uikit'

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class Tab2 extends Component {
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

  render() {
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
        <Layout>
          { data.map(item => (
            <ImageCard data={item} key={item.id} />
          ))}
        </Layout>
      </View>
    )
  }
}
