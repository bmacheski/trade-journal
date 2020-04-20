import gql from 'graphql-tag'

const GET_SYMBOLS = gql`
  query getSymbol {
    symbol {
      id
      name
    }
  }
`

export { GET_SYMBOLS }
