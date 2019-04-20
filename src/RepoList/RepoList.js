import React from 'react';
import PropTypes from 'prop-types';
import RepoListEntryContainer from '../RepoListEntry/RepoListEntryContainer';

const RepoList = ({ repos }) => (
  <div className="App-col">
    Repositories
    {repos.map((repo, i) => (
      <RepoListEntryContainer
        key={`repo-${i}`}
        repo={repo}
      />
    ))}
  </div>
);


RepoList.propTypes = {
  repos: PropTypes.array,
};

RepoList.defaultTypes = {
  repos: [],
};

export default RepoList;
