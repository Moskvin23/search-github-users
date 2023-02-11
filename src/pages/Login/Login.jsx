import React from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss';
import blob from '../../images/blobanimationUserPage.svg';
import { useAuth0 } from '@auth0/auth0-react';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className={style.container}>
        <img src={blob} alt="logoUser" className={style.img} />
        <h2>Search GitHub Users Application</h2>
        <Link to="/" className="btn" onClick={loginWithRedirect}>
          Login / Sign up
        </Link>
      </div>
    </>
  );
};

export default Login;
