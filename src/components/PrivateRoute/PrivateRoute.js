import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ element: component, redirect }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? component : <Navigate to={redirect} />;
}