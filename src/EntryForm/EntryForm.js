import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './EntryForm.css';

class EntryForm extends Component {

  getRepos = (apiKey) => {
    const { onSetRepos } = this.props;

    axios.post('/api/repositories', {
      apiKey
    })
      .then(({ data }) => {
        onSetRepos(data);
      });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const apiKey  = e.target.querySelector('input[name="apiKey"]').value;

    onSubmit(apiKey);
    this.getRepos(apiKey);
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
    );
  }
}

EntryForm.propTypes = {
  apiKey: PropTypes.string,
  onSetApiKey: PropTypes.func.isRequired,
  onSetIssues: PropTypes.func.isRequired,
  onSetRepos: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EntryForm.defaultTypes = {
  apiKey: '',
};

export default EntryForm;
