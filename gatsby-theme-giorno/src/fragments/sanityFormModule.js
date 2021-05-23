import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityFormModule on SanityPage {
    pageBuilder {
      ... on SanityForm {
        _key
        _type
        name
        title
        description {
          _rawChildren
          _type
          children {
            _key
            _type
            marks
            text
          }
        }
        inputs {
          ... on SanityInput {
            _key
            _type
            label
            name
            required
            type
          }
          ... on SanityTextarea {
            _key
            _type
            label
            maxLength
            minLength
            name
            required
          }
        }
        submit {
          _key
          _type
          text
        }
      }
    }
  }
`;
