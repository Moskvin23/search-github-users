import React from 'react';
import style from './Header.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div className={style.container}>
      <div className={style.content}>
        {isUser && user.name && (
          <h4>
            Welcome, <b>{user.name}</b>
          </h4>
        )}

        {isUser ? (
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
            className="btn3">
            Logout
          </button>
        ) : (
          <button onClick={loginWithRedirect} className="btn3">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
