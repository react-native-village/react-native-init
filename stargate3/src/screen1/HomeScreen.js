import React, { useState } from 'react'
import { View } from 'react-native'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { Header, Layout, ImageCard, Search } from '../components/uikit'
import { STARGATE_DETAILS } from '../routes'

const GET_SHOWS = gql`
  query($search: String!) {
    shows(search: $search) @rest(type: "Person", path: "search/shows?q={args.search}") {
      show @type(name: "Show") {
        id
        name
        summary
        image @type(name: "Image") {
          medium
          original
        }
      }
    }
  }
`

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('StarGate')
  const { data, loading } = useQuery(GET_SHOWS, { variables: { search: value } })
  const onPress = i => () => setVisible(i)
  const onSearchChange = text => setValue(text)
  const onScreen = (screen, show) => () => navigation.navigate(screen, show)

  return (
    <View>
      {visible ? (
        <Search
          colorRight="#fff"
          iconRight="magnify"
          placeholder="Search"
          onChangeText={onSearchChange}
          onPressRight={onPress(false)}
          onBlur={onPress(false)}
        />
      ) : (
        <Header title={value} colorRight="#fff" iconRight="magnify" onPressRight={onPress(true)} />
      )}
      <View />
      <Layout>
        {!loading &&
          data.shows.map(item => (
            <ImageCard data={item.show} key={item.show.id} onPress={onScreen(STARGATE_DETAILS, { show: item.show })} />
          ))}
      </Layout>
    </View>
  )
}

export default HomeScreen
