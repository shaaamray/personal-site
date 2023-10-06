import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <li className="publication-container">
    <h4 className="publication-title">{data.title}</h4>
    <p className="publication-conference">{data.conference}</p>
    <div className="publication-authors">
      {data.authors.join(', ')}
    </div>
  </li>
);

Publication.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Publication;
