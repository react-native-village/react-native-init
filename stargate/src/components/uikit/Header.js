import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    ...ifIphoneX(
      {
        height: 116
      },
      {
        height: 90
      }
    ),
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 50
      }
    )
  }
})

const Header = props => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

export { Header }
