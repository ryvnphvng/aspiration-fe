/* eslint-disable one-var */
/* eslint-disable no-undef */
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { render, screen, waitFor } from '@testing-library/react';

import TopicSearch from './components/TopicSearch';

test('TopicSearch Component renders results for "react"', async () => {
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

  render(
    <ApolloProvider client={client}>
      <TopicSearch />
    </ApolloProvider>
  );

  await waitFor(() => screen.getByText('Topic Results'));

  const linkElement = screen.getByText('react');

  expect(linkElement).toBeInTheDocument();
});
