/* eslint-disable one-var */
import React from 'react';
import { useQuery } from '@apollo/client';

import Button from '../common/Button';
import InputTextbox from '../common/InputTextbox';
import LoadingSpinner from '../common/LoadingSpinner';
import TopicsTable from '../TopicsTable';

import { SEARCH_TOPIC, TOPICS_RESULTS } from '../../constants/appVariables';

import { LIST_TOPICS } from '../../graphql/queries/listTopics';

import './styles.scss';

const TopicSearch = () => {
  // Component States
  const [name, setName] = React.useState('react');
  const [searchItem, setSearchItem] = React.useState('react');
  const [topics, setTopics] = React.useState([]);

  const { loading, error, data } = useQuery(LIST_TOPICS, {
    variables: { name }
  });

  const handleChange = (event) => {
    const target = event.currentTarget;

    setSearchItem(target.value);
  };

  const handleClick = (value) => {
    window.location = `/topics/${value}`;
  };

  const handleSubmit = () => {
    setName(searchItem);
  };

  React.useEffect(() => {
    if (!loading && data !== undefined) {
      const newTopics = [];

      newTopics.push([data.topic.name, data.topic.stargazerCount]);

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
    <div className="search-page">
      <div className="inputs-wrapper">
        <InputTextbox
          onChange={handleChange}
          placeholder={SEARCH_TOPIC}
          type="search"
          value={searchItem}
        />
        <Button
          disabled={!searchItem}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      <TopicsTable
        onClick={handleClick}
        title={TOPICS_RESULTS}
        topics={topics}
      />
    </div>
  );
};

export default TopicSearch;
