import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import MockDataUser from './mockData/MockDataUser';
import MockRepos from './mockData/MockRepos';

const mainUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(MockDataUser);
  const [repos, setRepos] = useState(MockRepos);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: '' });

  const searchGitHubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${mainUrl}/users/${user}`).catch((error) => console.log(error));
    if (response) {
      setGithubUser(response.data);
      const { login } = response.data;
      axios(`${mainUrl}/users/${login}/repos?per_page=100`).then((response) =>
        setRepos(response.data),
      );
    } else {
      toggleError(true, 'There is not user with that username!');
    }
    checkRequests();
    setIsLoading(false);
  };

  const checkRequests = () => {
    axios(`${mainUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'Sorry, you have reached the limit!');
        }
      })
      .catch((error) => console.log(error));
  };

  function toggleError(show = false, message = '') {
    setError({ show, message });
  }
  useEffect(() => {
    checkRequests();
  }, []);
  return (
    <GithubContext.Provider
      value={{ githubUser, repos, isLoading, requests, error, searchGitHubUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
