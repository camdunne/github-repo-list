import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './IssuesListEntry.css';

function formatCreatedAt(string) {
  const date = new Date(string);
  
  return moment(date.toString()).format("MM/DD/YYYY");
}

function formatUpdatedAt(string) {
  const date = new Date(string);

  return moment(date).fromNow();
}

class IssuesListEntry extends Component {
  handleDragStart = (e) => {
    console.log('handleDragStart', this.props.issue.title)
  }
  handleDragOver = (e) => {
    console.log('handleDragOver', this.props.issue.title)
  }
  handleDrop = (e) => {
    console.log('handleDrop', this.props.issue.title)
  }

  render() {
    const { issue: { assigneeAvatar, title, created_at, updated_at} } = this.props;
    const createdAt = formatCreatedAt(created_at);
    const updatedAt = formatUpdatedAt(updated_at);

    return (
      <div
        className="drag"
        draggable
        onDragStart={(e)=>this.handleDragStart(e)}
        onDragOver={(e)=>this.handleDragOver(e)}
        onDrop={(e)=>this.handleDrop(e)}
      >
        {(assigneeAvatar) ?
          <img src={assigneeAvatar} /> : ''
        }
        {title}
        {createdAt}
        {updatedAt}
      </div>
    );
  }
}


IssuesListEntry.propTypes = {
  issue: PropTypes.object,
}

IssuesListEntry.defaultTypes = {
  issue: {},
}

export default IssuesListEntry;
