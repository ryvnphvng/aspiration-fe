import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

import './styles.scss';

const Table = ({
  data,
  headers,
  minRows,
  onClick = null,
  title
}) => (
  <React.Fragment>
    {title && (<div className="table-title">{title}</div>)}
    <div className="table-wrapper">
      <TableHeader headers={headers} />
      <div className="table-body">
        {!!data.length && data.map((entry, i) => (
          <TableRow key={i} data={entry} onClick={onClick} />
        ))}
        {data.length < minRows && Array.from({ length: minRows - data.length }, (_, i) => (
          <TableRow key={i} data={null} />
        ))}
      </div>
    </div>
  </React.Fragment>
);

Table.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array,
  minRows: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default Table;
