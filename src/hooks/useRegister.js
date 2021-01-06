import { useMutation } from '@apollo/react-hooks';
import { register } from '../graphql/signup';
import { useUser } from './useUserContext';

export const useRegister = () => {
  const [mutation, { loading, error }] = useMutation(register);
  const { activateAuth } = useUser();

  const errorMsg = error && 'El usuario ya existe o hay algún problema';

  const registerUser = (email, password) => {
    mutation({ variables: { input: { email, password } } }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  return { registerUser, loading, errorMsg };
};
