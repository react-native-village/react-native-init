import React, { PureComponent } from 'react'
import { View, Button, ScrollView, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'
import { WHITE, BLUE, w } from '../../constants'
import {
  STARGATE_HOME 
} from '../routes'

export default class DelailsScreen extends PureComponent {
  render() {
    const { image, name, summary} = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image, name }
    const { container, sub, h1, h2 } = styles 
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon='ios-arrow-back'
          headerColor={BLUE}
          leftColor={WHITE}
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Button
              onPress={() => navigation.navigate(STARGATE_HOME)}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15
  }
})
