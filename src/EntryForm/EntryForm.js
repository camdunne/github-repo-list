import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './EntryForm.css';

class EntryForm extends Component {

  componentDidMount() {
    const { onSetIssues, onSetApiKey } = this.props;
    const apiKey = window.localStorage.getItem('apiKey');

    if (apiKey) {
      onSetApiKey(apiKey);
    }

    this.getRepos(apiKey);
    let issues = window.localStorage.getItem(`issues-${apiKey}`);
    
    if (issues) {
      issues = JSON.parse(issues);
      onSetIssues(issues);
    }
    
  }

  getRepos = (apiKey) => {
    const { onSetRepos } = this.props;
    let repos = window.localStorage.getItem(`repos-${apiKey}`);

    console.log('repos', repos)
    if (repos) {
      
      repos = JSON.parse(repos);
      onSetRepos(repos);

      return;
    }

    axios.post('/api/repositories', {
      apiKey
    })
      .then(({ data }) => {
        onSetRepos(data);
        window.localStorage.setItem(`repos-${apiKey}`, JSON.stringify(data));
      })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const apiKey  = e.target.querySelector('input[name="apiKey"]').value;

    onSubmit(apiKey);
    window.localStorage.setItem('apiKey', apiKey);
    this.getRepos();
  }

  render () {
    return (
      <div className='EntryForm'>
        <form action="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="apiKey">Github API Key:</label>
          <input
            type='text'
            name="apiKey"
          />
          <input
            type="submit"
            name="Enter"
          />
        </form>
      </div>
    )
  }
}

EntryForm.propTypes = {
  apiKey: PropTypes.string,
  onSetApiKey: PropTypes.func.isRequired,
  onSetIssues: PropTypes.func.isRequired,
  onSetRepos: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

EntryForm.defaultTypes = {
  apiKey: '',
}

export default EntryForm;
