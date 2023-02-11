import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import style from './AuthWrapper.module.scss';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className={style.loader}>
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
