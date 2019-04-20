import React, { Component, Fragment } from 'react';
import EntryForm from '../EntryForm/EntryForm';
import axios from 'axios';
import './App.css';
import RepoList from '../RepoList/RepoList';
import IssuesList from '../IssuesList/IssuesList';


class App extends Component {
  state = {
    apiKey: "",
    repos: [],
    issues: [],
  }

  getRepos = () => {
    const { apiKey } = this.state;
    axios.post('/api/repositories', {
      apiKey
    })
      .then(({ data }) => {
        this.setState({ repos: data });
      })
  }

  updateAppState = (newState) => {
    this.setState(newState);
  }

  componentDidUpdate(_, prevState) {
    const { apiKey } = this.state;
    console.log(this.state)
    if (apiKey !== prevState.apiKey) {
      this.getRepos();
    }
  }

  render () {
    const { apiKey, repos, issues } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          {(!apiKey) ?
            <EntryForm updateAppState={this.updateAppState} />
            : <Fragment>
              <RepoList repos={repos} apiKey={apiKey} updateAppState={this.updateAppState} />
              <IssuesList issues={issues} />
            </Fragment>
          }
        </header>
      </div>
    )
  }
}

export default App;
