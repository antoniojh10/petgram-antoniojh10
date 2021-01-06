import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/login';
import { useUser } from './useUserContext';

export const useSignin = () => {
  const [mutation, { loading, error }] = useMutation(LOGIN);
  const { activateAuth } = useUser();

  const errorMsg =
    error && 'El usuario no está registrado o la contraseña es incorrecta.';

  const loginUser = ({ email, password }) => {
    mutation({ variables: { input: { email, password } } }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  return { loginUser, loading, errorMsg };
};
