import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publications/Publication';

const getPublicationRows = (publications) => publications.map((publication, idx) => (
  <div className="publication" key={publication.title}>
    <Publication data={publication} last={idx === publications.length - 1} />
  </div>
));

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    <ul className="publication-list">{getPublicationRows(data)}</ul>
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      conference: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
