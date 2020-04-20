import gql from 'graphql-tag'

const GET_SETUPS = gql`
  query {
    setup {
      id
      name
    }
  }
`

export { GET_SETUPS }
