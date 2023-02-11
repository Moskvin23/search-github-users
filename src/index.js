import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // dev-mn75v02jnld2d48o.us.auth0.com
  // EXAHkj4ViJC5MpiF37ZSfWMk6q17VZrn
  <Auth0Provider
    domain="dev-mn75v02jnld2d48o.us.auth0.com"
    clientId="EXAHkj4ViJC5MpiF37ZSfWMk6q17VZrn"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage">
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
);
