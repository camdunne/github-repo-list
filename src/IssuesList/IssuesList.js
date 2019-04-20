import React from 'react';
import PropTypes from 'prop-types';
import IssuesListEntryContainer from '../IssuesListEntry/IssuesListEntryContainer';

const IssuesList = ({ issues }) => {
  if (issues.length) {
    return (
      <div className="App-col">
        Issues
        {issues.map((issue, idx) => (
          <IssuesListEntryContainer
            key={`issue-${issue.id}`}
            idx={idx}
            issue={issue}
          />
        ))}
      </div>
    );
  }

  return <div/>;
};


IssuesList.propTypes = {
  issues: PropTypes.array,
};

IssuesList.defaultTypes = {
  issues: [],
};

export default IssuesList;
