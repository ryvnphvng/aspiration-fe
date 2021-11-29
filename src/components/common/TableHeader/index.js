import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TableHeader = ({ headers }) => (
  <div className="table-header">
    {headers.map((header, i) => (
      <div key={i} className="header">{header}</div>
    ))}
  </div>
);

TableHeader.propTypes = {
  headers: PropTypes.array
};

export default TableHeader;
