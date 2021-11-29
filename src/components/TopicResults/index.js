/* eslint-disable one-var */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { RELATED_TOPICS } from '../../constants/appVariables';
import { LIST_TOPICS } from '../../graphql/queries/listTopics';

import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';
import TopicsTable from '../TopicsTable';

import './styles.scss';

const TopicResults = () => {
  // Component States
  const [topics, setTopics] = React.useState([]);

  const navigate = useNavigate();

  const { name } = useParams();

  const { loading, error, data } = useQuery(LIST_TOPICS, {
    variables: { name }
  });

  const handleClick = () => {
    navigate('/');
  };

  React.useEffect(() => {
    if (!loading && data !== undefined) {
      const newTopics = [];

      data.topic.relatedTopics.forEach((relatedTopic) => {
        newTopics.push([relatedTopic.name, relatedTopic.stargazerCount]);
      });

      setTopics(newTopics);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <div className="loading-placeholder">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return 'Error...';
  }

  return (
    <div className="topic-results-page">
      <div className="inputs-wrapper">
        <Button
          onClick={handleClick}
        >
          Back
        </Button>
      </div>
      <TopicsTable
        topics={topics}
        title={RELATED_TOPICS}
      />
    </div>
  );
};

export default TopicResults;
