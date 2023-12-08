import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: component, redirect }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirect} /> : component;
}