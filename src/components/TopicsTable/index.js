import React from 'react';
import PropTypes from 'prop-types';

import {
  NAME,
  STARGAZERS
} from '../../constants/appVariables';

import Table from '../common/Table';

import './styles.scss';

const TopicsTable = ({ onClick, title, topics }) => (
  <div className="topics-table">
    <Table
      data={topics}
      headers={[
        NAME,
        STARGAZERS
      ]}
      minRows={4}
      onClick={onClick}
      title={title}
    />
  </div>
);

TopicsTable.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  topics: PropTypes.array
};

export default TopicsTable;
