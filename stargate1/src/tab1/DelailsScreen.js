import React, { PureComponent } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { Header } from '../components/uikit'
import { WHITE, w } from '../../constants'

export default class DelailsScreen extends PureComponent {
  render() {
    const { name, image, info, year } = this.props.navigation.state.params
    const { navigation } = this.props
    const { cover, h1, overlay } = styles
    console.log(this.props)
    return (
      <View>
        <ImageBackground style={cover} source={{ uri: image}}>
          <View style={overlay}>
            <Header
              detail
              title={name}
              leftIcon='ios-arrow-back'
              headerColor={'rgba(#000000, 0)'}
              leftColor={WHITE}
              navigation={navigation}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={h1}>{name}</Text>
              <Text style={h1}>{year}</Text>
            </View>
          </View>
        </ImageBackground>
        <Text>{info}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: w * 1.5
  },
  h1: {
    paddingTop: 10,
    width: w / 1.5,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
    color: WHITE
  }
})
