import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IssuesListEntryContainer from '../IssuesListEntry/IssuesListEntryContainer';
import './IssuesList.css';


const IssuesList = ({ issues }) => (
  <Fragment>
    {issues.map((issue, idx) => (
      <IssuesListEntryContainer
        key={`issue-${issue.id}`}
        idx={idx}
        issue={issue}
      />
    ))}
  </Fragment>
);


IssuesList.propTypes = {
  issues: PropTypes.array,
};

IssuesList.defaultTypes = {
  issues: [],
};

export default IssuesList;
