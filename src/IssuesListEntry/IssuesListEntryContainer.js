import { connect } from 'react-redux';
import { reorderIssues } from '../actions';
import IssuesList from './IssuesList';

const mapStateToProps = (state,) => ({
  issues: state.issues
});

const mapDispatchToProps = (dispatch) => ({
  onDrop: (id) => dispatch(reorderIssues(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesList);