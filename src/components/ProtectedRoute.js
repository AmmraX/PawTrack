
import { Navigate } from 'react-router-dom';
import { getAuthSession } from '../utils/auth';
import React from 'react';

export default function ProtectedRoute({ children }) {
  const auth = getAuthSession();
  
  if (!auth?.isAuthenticated) {
    return React.createElement(Navigate, { to: "/signin", replace: true });
  }
  
  return children;
}