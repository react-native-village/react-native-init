import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = ({ title }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 116,
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 28
  }
})

export default Header
