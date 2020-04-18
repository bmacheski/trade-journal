import gql from 'graphql-tag'

const GET_SYMBOLS = gql`
  query {
    symbol {
      id
      name
    }
  }
`

export { GET_SYMBOLS }
