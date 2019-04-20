import { connect } from 'react-redux';
import { reorderIssues } from '../actions';
import IssuesListEntry from './IssuesListEntry';

const mapStateToProps = ({ issues }) => ({
  issues
});

const mapDispatchToProps = (dispatch) => ({
  onDrop: (dragId, idx) => dispatch(reorderIssues(dragId, idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesListEntry);