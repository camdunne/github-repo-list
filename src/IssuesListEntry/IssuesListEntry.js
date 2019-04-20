import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './IssuesListEntry.css';

class IssuesListEntry extends Component {
  handleDragStart = (e) => {
    console.log('handleDragStart', this.props.issue.title);
  }
  handleDragOver = (e) => {
    console.log('handleDragOver', this.props.issue.title);
  }
  handleDrop = (e) => {
    console.log('handleDrop', this.props.issue.title);
  }

  render() {
    const { issue: { assigneeAvatar, title, created_at, updated_at} } = this.props;
    const createdAt = moment(created_at).format("MM/DD/YYYY");
    const updatedAt = moment(updated_at).fromNow();

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
};

IssuesListEntry.defaultTypes = {
  issue: {},
};

export default IssuesListEntry;
