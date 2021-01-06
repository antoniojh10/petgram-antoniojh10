import { gql } from 'apollo-boost';

export const register = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
