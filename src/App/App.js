import React from 'react';
import PropTypes from 'prop-types';
import EntryFormContainer from '../EntryForm/EntryFormContainer';
import RepoListContainer from '../RepoList/RepoListContainer';
import IssuesListContainer from '../IssuesList/IssuesListContainer';
import './App.css';

const App = ({ apiKey }) =>  (
  <div className='App'>
    <header className='App-header'>
      {(!apiKey) ?
        <EntryFormContainer /> :

        <div className="App-container">
          <RepoListContainer />
          <IssuesListContainer />
        </div>
      }
    </header>
  </div>
);

App.propTypes = {
  apiKey: PropTypes.string,
};

App.defaultProps = {
  apiKey: '',
};

export default App;
