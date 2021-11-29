/* eslint-disable one-var */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const token = process.env.REACT_APP_GITHUB_API_TOKEN;

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Token ${token}` : null
  }
}));

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: process.env.REACT_APP_GITHUB_API_URL })
  ),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
