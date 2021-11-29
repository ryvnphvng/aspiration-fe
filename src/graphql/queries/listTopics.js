/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const LIST_TOPICS = gql`
  query ListTopics ($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;
