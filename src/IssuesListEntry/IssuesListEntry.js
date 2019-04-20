import React from 'react';
import PropTypes from 'prop-types';
import './IssuesListEntry.css';

const IssuesListEntry = ({ issue }) => {
  console.log(issue)
  return(
    <div>
      {issue.title}
    </div>
  );
}


IssuesListEntry.propTypes = {
  issue: PropTypes.object,
}

IssuesListEntry.defaultTypes = {
  issue: {},
}

export default IssuesListEntry;
