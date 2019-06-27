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
