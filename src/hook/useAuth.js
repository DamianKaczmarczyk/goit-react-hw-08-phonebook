import { useSelector } from 'react-redux';
import { selectEmail, selectIsLoggedIn, selectUser } from 'redux/reducers/auth/selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const email = useSelector(selectEmail)
  return { isLoggedIn, user, email };
};