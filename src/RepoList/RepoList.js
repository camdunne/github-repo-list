import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RepoListEntryContainer from '../RepoListEntry/RepoListEntryContainer';
import './RepoList.css';


const RepoList = ({ repos }) => (
  <Fragment>
    {repos.map((repo, i) => (
      <RepoListEntryContainer
        key={`repo-${i}`}
        repo={repo}
      />
    ))}
  </Fragment>
);


RepoList.propTypes = {
  repos: PropTypes.array,
}

RepoList.defaultTypes = {
  repos: [],
}

export default RepoList;
