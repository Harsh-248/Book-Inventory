import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { Spinner } from 'flowbite-react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {   const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
    );
  }

  if (user) {
    return children; 
}

  return <Navigate to="/login" state={{ from: location }} replace />; 
}

export default PrivateRoute;
