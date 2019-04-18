import React, { Component } from 'react';
import EntryForm from '../EntryForm/EntryForm';
import axios from 'axios';
import './App.css';

function getRepos(apiKey) {
  axios.post('/api/repositories', {
    apiKey
  })
}

class App extends Component {
  state = {
    apiKey: "",
  }

  updateAppState = (newState) => {
    this.setState(newState);
    getRepos(newState.apiKey);
  }

  render () {
    const { apiKey } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          {(!apiKey) ?
            <EntryForm updateAppState={this.updateAppState} /> 
            : apiKey
          }
        </header>
      </div>
    )
  }
}

export default App;
