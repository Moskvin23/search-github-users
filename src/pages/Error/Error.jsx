import React from 'react';
import { Link } from 'react-router-dom';
import style from './Error.module.scss';

const Error = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.topOf}>404</h1>
        <h2>Oops!, something went wrong</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </>
  );
};

export default Error;
