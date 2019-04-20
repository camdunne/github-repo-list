import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IssuesListEntry from '../IssuesListEntry/IssuesListEntry';
import './IssuesList.css';


const IssuesList = ({ issues, apiKey }) =>
  (
    <Fragment>
      {issues.map((issue, i) => (
        <IssuesListEntry
          key={`issue-${i}`}
          issue={issue}
          apiKey={apiKey}
        />
      ))}
    </Fragment>
  );

IssuesList.propTypes = {
  issues: PropTypes.array,
  apiKey: PropTypes.string
}

IssuesList.defaultTypes = {
  issues: [],
  apiKey: '',
}

export default IssuesList;
