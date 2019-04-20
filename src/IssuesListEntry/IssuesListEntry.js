import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './IssuesListEntry.css';

function getContainer (el) {
  if (el.id === 'drag') return el;
  const parent = el.parentElement;
  if (parent.id === 'drag') return parent;
}

class IssuesListEntry extends Component {


  handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.effectAllowed = 'move';
    const { idx } = this.props;
    e.dataTransfer.setData('text/plain', idx);
  }

  handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    const element = getContainer(e.target);
    if (element) element.classList.add('over');
  }

  handleDragLeave = (e) => {
    e.stopPropagation();
    const element = getContainer(e.target);
    if (element) element.classList.remove('over');
  }

  handleDrop = (e) => {
    const { onDrop, idx } = this.props;
    e.stopPropagation();
    const element = getContainer(e.target);
    if (element) element.classList.remove('over');
 
    var dropId= e.dataTransfer.getData('text/plain');
    onDrop(dropId, idx);
  }

  render() {
    const { issue: { assigneeAvatar, title, created_at, updated_at} } = this.props;
    const createdAt = moment(created_at).format("MM/DD/YYYY");
    const updatedAt = moment(updated_at).fromNow();

    return (
      <div
        id="drag"
        className="drag main"
        draggable
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      >
        <div className="container">
          {(assigneeAvatar) ?
            <img src={assigneeAvatar} /> : ''
          }
          <div className="title">{title}</div>
        </div>
        <div className="date">Created: {createdAt}</div>
        <div className="date">Updated: {updatedAt}</div>
      </div>
    );
  }
}


IssuesListEntry.propTypes = {
  idx: PropTypes.number.isRequired,
  issue: PropTypes.object,
  onDrop: PropTypes.func.isRequired,
};

IssuesListEntry.defaultTypes = {
  issue: {},
};

export default IssuesListEntry;
