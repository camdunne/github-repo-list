import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EntryForm.css';

class EntryForm extends Component {
  state = {
    apiKey: null,
  }

  handleSubmit = (e) => {
    const { updateAppState } = this.props;
    const { apiKey } = this.state;
    e.preventDefault();
    updateAppState({ apiKey });
  }

  render () {
    return (
      <div className='EntryForm'>
        <form action="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="apiKey">Github API Key:</label>
          <input
            type='text'
            name="apiKey"
            onChange={(e) => { this.setState({ apiKey: e.target.value }) }}
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
  updateAppState: PropTypes.func,
}

EntryForm.defaultProps = {
  updateAppState: () => {},
}

export default EntryForm;
