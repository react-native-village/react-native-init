import React, {Component} from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../components/uikit'
import {
  BATMAN_DETAILS
} from '../routes'
import { BLUE } from '../../constants'

//const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'
const url = 'https://api.tvmaze.com/search/shows?q=batman'

export default class Main extends Component {
  state = {
    title: 'BATMAN',
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
    const { navigation } = this.props
    return (
      <View>
        <Header title={title} headerColor={BLUE} />
        <Layout>
          { data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              screen={BATMAN_DETAILS}
              navigation={navigation}
            />
          ))}
        </Layout>
      </View>
    )
  }
}
