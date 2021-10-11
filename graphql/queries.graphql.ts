import gql from 'graphql-tag'

const globals = gql`
  query globals {
    globals {
      id
    }
  }
`

const galerie = gql`
  query galerie {
    galerie {
      id
    }
  }
`

const aktuality = gql`
  query aktuality {
    aktuality {
      id
    }
  }
`

const home = gql`
  query home {
    home {
      id
    }
  }
`