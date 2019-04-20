import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoListEntry from '../RepoListEntry/RepoListEntry';
import './RepoList.css';


const RepoList = ({ repos, apiKey, updateAppState }) =>
  (
    <Fragment>
      {repos.map((repo, i) => (
        <RepoListEntry
          key={`repo-${i}`}
          repo={repo}
          apiKey={apiKey}
          updateAppState={updateAppState}
        />
      ))}
    </Fragment>
  );

RepoList.propTypes = {
  repos: PropTypes.array,
  apiKey: PropTypes.string,
  updateAppState: PropTypes.func.isRequired,
}

RepoList.defaultTypes = {
  repos: [],
  apiKey: '',
}

export default RepoList;
