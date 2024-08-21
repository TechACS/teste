// src/components/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');  // Obtenha o token do localStorage

  // Verifique se o token está presente
  return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
