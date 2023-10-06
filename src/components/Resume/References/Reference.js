import React from 'react';
import PropTypes from 'prop-types';

const Reference = ({ data }) => (
  <li className="reference">
    <div className="name">
      <h3>{data.name}</h3>
    </div>
    <div className="position">
      <p>{data.position}</p>
    </div>
    <div className="institution">
      <p>{data.institution}</p>
    </div>
    <div className="contact">
      <p>Email: {data.email}</p> {/* Corrected from 'Gmail' */}
      <p>Phone: {data.phone}</p> {/* Corrected from 'Number' */}
    </div>
  </li>
);

Reference.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired, // Uncomment this if id is part of your data
    name: PropTypes.string,
    position: PropTypes.string,
    institution: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default Reference;
