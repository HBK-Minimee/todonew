import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-f8eqijzgatlh5d62.us.auth0.com"
    clientId="wCeZROdMTQKJ0mf7n0i61Z9ezC2ve49q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

