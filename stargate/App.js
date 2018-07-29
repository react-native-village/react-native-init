import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import Header from './src/common/Header'

export default class App extends Component {
  state = {
    name: 'Star Gate',
    data: []
  }
  componentDidMount = async() => {
     const response = await fetch('https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json') 
     const data = await response.json()
     this.setState({ data })
  }

  render() {
    const { name, data } = this.state
    console.log('data', data)
    //console.log(x.show.image.medium) 
    return (
      <ScrollView>
        <Header title={name} />
        {
          data.map(el => 
            <View key={el.id}>
              <Text>{el.name}</Text>
              <Image
                source={{ uri: el.image }}
                style={{width: 414, height: 621}}
              />
            </View>
          )
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
