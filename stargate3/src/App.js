import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Screen from './screen1'
import client from './apollo'

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Screen />
    </ApolloHooksProvider>
  </ApolloProvider>
)

export default App
