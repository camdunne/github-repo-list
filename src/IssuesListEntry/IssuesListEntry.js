import React from 'react';
import PropTypes from 'prop-types';
import './IssuesListEntry.css';

const IssuesListEntry = ({ issue }) => (
  <div>
    {issue.title}
  </div>
);


IssuesListEntry.propTypes = {
  issue: PropTypes.object,
}

IssuesListEntry.defaultTypes = {
  issue: {},
}

export default IssuesListEntry;
