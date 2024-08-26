// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/Home/Home';
import ErrorPage from './routes/Error/ErrorPage';
import LoginPage from './routes/LOGIN/LoginPage';
import App from './App';
import ProtectedRoute from './components/Login/ProtectedRoute';


import Cliente from './routes/Client/Cliente';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute element={<App />} />, // Protege todas as rotas internas
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <ProtectedRoute element={<Home />} />, // Protege a rota /home
      },
      {
        path: 'Cliente',
        element: <ProtectedRoute element={<Cliente />} />, // Protege a rota /home
      },
      // Adicione outras rotas protegidas aqui
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />, // Redireciona para a página de login
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
