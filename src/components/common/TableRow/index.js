import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TableRow = ({ data, onClick = null }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(data[0]);
    }
  };

  return (
    <div className={`table-row ${!onClick ? 'no-action' : ''}`} onClick={handleClick}>
      {data && data.map((item, i) => (
        <div key={i} className="table-cell ">{item}</div>
      ))}
    </div>
  );
};

TableRow.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func
};

export default TableRow;
