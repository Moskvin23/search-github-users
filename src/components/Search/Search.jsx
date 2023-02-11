import React, { useContext, useState } from 'react';
import { GithubContext } from '../../context/context';
import style from './Search.module.scss';

const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGitHubUser, isLoading } = useContext(GithubContext);
  console.log(requests);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGitHubUser(user);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {error.show && (
          <div className={style.error}>
            <div>{error.message}</div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={style.formControl}>
            <div>
              <input
                type="text"
                placeholder="Type github user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            {requests > 0 && !isLoading && (
              <button type="submit" className="btn3">
                Search
              </button>
            )}
          </div>
        </form>
        {!isLoading ? <h3>Requests: {requests} / 60</h3> : ''}
      </div>
    </div>
  );
};

export default Search;
