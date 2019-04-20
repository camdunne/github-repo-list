import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RepoListEntry.css';
import axios from 'axios';

class RepoListEntry extends Component {
  handleClick = () => {
    const { repo, apiKey, onClick } = this.props;
    axios.post('/api/issues', {
      apiKey,
      repo
    })
      .then(({ data }) => {
        onClick(data);
      });
  }

  render() {
    const { repo } = this.props;

    return (
      <div className="RepoListEntry-main" onClick={this.handleClick} >
        {repo.full_name}
      </div>
    );
  }
}

RepoListEntry.propTypes = {
  repo: PropTypes.object,
  apiKey: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

RepoListEntry.defaultTypes = {
  repo: {},
  apiKey: '',
};

export default RepoListEntry;
