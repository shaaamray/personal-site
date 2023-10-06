import React from 'react';
import PropTypes from 'prop-types';

import Reference from './References/Reference';

const getReferenceList = (references) => (
  references.map((reference) => (
    <Reference data={reference} key={reference.id} />
  ))
);

const References = ({ references }) => (
  <div className="references">
    <div className="title">
      <h3>References</h3>
    </div>
    <ul className="reference-list">
      {getReferenceList(references)}
    </ul>
  </div>
);

References.propTypes = {
  references: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Uncomment this if id is part of your data
      name: PropTypes.string,
      position: PropTypes.string,
      institution: PropTypes.string,
      email: PropTypes.string, // Corrected from 'gmail'
      phone: PropTypes.string, // Corrected from 'number'
    }),
  ),
};

References.defaultProps = {
  references: [],
};

export default References;
