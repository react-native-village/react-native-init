Продолжаем курс по Redux или клонируем репу:
`git clone https://github.com/react-native-village/react-native-init.git`

Окончательный код проекта дуступен [здесь](https://github.com/react-native-village/react-native-init/tree/master/stargate3)

Переходим в папку проекта
`cd react-native-init/stargate2`

Удалям редакс из проекта

Первым шагом удалям зависимости:
`yarn remove react-redux redux redux-devtools-extension redux-thunk`

Вторым удаляем папки редаска
`rm -rf actions reducers`

Переносим файл App из `/stargate2/App.js` в `/stargate/src/App.js`

Корректируем импорт в `/stargate2/index.js` 
```diff
- import App from './App'
+ import App from './src/App'
```

Редактируем `/stargate/src/App.js`
```diff
import React from 'react'
import { Provider } from 'react-redux'
- import { composeWithDevTools } from 'redux-devtools-extension'
- import { createStore, applyMiddleware } from 'redux'
- import ReduxThunk from 'redux-thunk'
- import reducers from './src/reducers'
- import Screen from './src/screen1'
+ import Screen from './screen1'

- const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

const App = () => (
-  <Provider store={store}>
    <Screen />
-  </Provider>
)

export default App
```

Ставим Apollo
```yarn add apollo-cache-inmemory apollo-client apollo-link apollo-link-rest apollo-link-state graphql graphql-anywhere graphql-tag qs react-apollo react-apollo-hooks```

Редактируем `/stargate/src/App.js`
```diff
import React from 'react'
+ import { ApolloProvider } from 'react-apollo'
+ import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Screen from './screen1'
+ import client from './apollo'

const App = () => (
+  <ApolloProvider client={client}>
+    <ApolloHooksProvider client={client}>
      <Screen />
+    </ApolloHooksProvider>
+  </ApolloProvider>
)

export default App
```
Содаем новую директорию и файл `/stargate/src/apollo/index.js`
```js
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({ uri: 'http://api.tvmaze.com/' })

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache
})

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([stateLink, restLink]),
  cache
})

export default client
```

Выпиливаем Redux `stargate2/src/screen1/HomeScreen.js`
```diff
- import { connect } from 'react-redux'
- import { searchChanged, getMovies } from '../actions'

- const mapStateToProps = state => ({
-   movie: state.search.movie,
-   data: state.search.data
- })

- export default connect(
-   mapStateToProps,
-   { searchChanged, getMovies }
- )(HomeScreen)

+ export default HomeScreen
```

Для того чтобы можно быо использовать хуки, мы переписываем классовый компонент на функциональный `stargate2/src/screen1/HomeScreen.js`

```diff
- class HomeScreen extends Component {
+ const HomeScreen = ({ navigation }) => {
-   render() {
      return (
        <View>
          ...
        </View>
      )  
-   }
}
```

Переписываем state на useState и хуки
```diff
- import React, { Component } from 'react' 
+ import React, { useState } from 'react' 


const HomeScreen = ({ navigation }) => {
+ const [value, setValue] = useState('StarGate')
+ const [visible, setVisible] = useState(false)
-  const onSearchChange = text => {
-    this.props.searchChanged(text)
-    this.props.getMovies(text)
-  }

// выносим стрелочную функцию из рендера
+  const onScreen = (screen, show) => () => navigation.navigate(screen, show)
+  const onPress = i => () => setVisible(i) 
+  const onSearchChange = text => setValue(text)

   return (
     <View>
-      {visibleSearchbar ? (
+      {visible ? (
        <Search
          colorRight="#fff"
          iconRight="magnify"
          placeholder="Search"
-         onChangeText={this.onSearchChange}
+         onChangeText={onSearchChange}
-         value={movie}
-         onPressRight={() => this.setState({ visibleSearchbar: false })} 
+         onPressRight={onPress(false)}
-         onBlur={() => this.setState({ visibleSearchbar: false })}
+         onBlur={onPress(false)}
        />
        ) : (
        <Header
-          title={movie || 'Search'}
+          title={value}
           colorRight="#fff"
           iconRight="magnify"
-          onPressRight={() => this.setState({ visibleSearchbar: true })}
+          onPressRight={onPress(true)}
        />
       )}
        <Layout>
-         {data.map(item => (
+         {!loading &&
+           data.shows.map(item => (
            <ImageCard		
              data={item.show}		
              key={item.show.id}		
-             onPress={() => navigation.navigate(STARGATE_DETAILS, { show: item.show })}
+             onPress={onScreen(STARGATE_DETAILS, { show: item.show })}		
            />		
          ))}		          
        </Layout>
      ...
    <View>
```

Подключаем и вызываем хук запроса
```js
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

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
  const [value, setValue] = useState('StarGate')
  const { data, loading } = useQuery(GET_SHOWS, { variables: { search: value } })
  ...
}
```

Рефакторим код в `components/uikit/ImageCard.js`
```diff
- const img = image === null ? 'http://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image 
+ const img = image === null ? 'http://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image.medium 
```

Рефакторим код в `components/uikit/ImageBigCard.js`
```diff
+ const img = image === null ? 'http://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image.original 
+ <Image style={cover} source={{ uri: img }} /> 
- <Image style={cover} source={{ uri: img.original }} /> 
```

DONE
