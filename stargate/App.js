import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Header from './src/uikit/Header'
import { responsive, w, h } from './constants'

const { mobile5, mobile8, mobile8plus } = responsive

export default class App extends Component {
  state = {
    name: 'STAR GATE',
    data: []
  }

  componentDidMount = async() => {
     const response = await fetch('https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json') 
     const data = await response.json()
     this.setState({ data })
  }

  render() {
    const { container, sub, shadow, cover, h1, h2 } = styles
    const { name, data } = this.state
    return (
      <View>
        <Header title={name} />
        <ScrollView style={container}>
          <View style={sub}>
            { data.map(el => 
                       <View style={{ marginBottom: 10 }} key={el.id}>
                <View style={shadow}>
                  <Image source={{ uri: el.image }} style={cover} />
                </View>
                <Text style={h1}>{el.name.toUpperCase()}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#F4F4F4'
  },
  sub: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'center',
    marginBottom: 150
  },
  h1: {
    alignSelf: 'center',
    width: w/2.4,
    color: '#000',
    fontSize: 18,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center'
  },
  shadow: {
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  cover: {
    width: w/2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})
