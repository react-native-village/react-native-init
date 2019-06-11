import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../../../constants'

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 90
      }
    )
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 50
      }
    )
  },
  leftButtonStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 50
      }
    ),
    fontSize: 35
  }
})

const Header = ({ detail, leftIcon, leftColor, headerColor, title, onPress }) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
  return (
    <View style={[viewStyle, { backgroundColor: headerColor }]}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftColor} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>
        {title}
      </Text>
    </View>
  )
}

export { Header }
