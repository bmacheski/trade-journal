import gql from 'graphql-tag'

const GET_SETUPS = gql`
  query getSetup {
    setup {
      id
      name
    }
  }
`

export { GET_SETUPS }
