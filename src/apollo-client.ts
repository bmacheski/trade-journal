import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, split } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { OperationDefinitionNode } from 'graphql'

function getAuthHeader() {
  return 'test'
}

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8080/v1/graphql',
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: () => {
      return { headers: { Authorization: getAuthHeader() } }
    },
  },
})

const authLink = setContext((_, { headers }) => {
  const auth = getAuthHeader()

  return {
    headers: {
      ...headers,
      Authorization: auth,
    },
  }
})

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(
      query,
    ) as OperationDefinitionNode
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink),
)

const link = ApolloLink.from([terminatingLink])
const cache = new InMemoryCache({ addTypename: false })

export default new ApolloClient({
  link,
  cache,
})
