import { connect } from 'react-redux';
import { setIssues } from '../actions';
import RepoListEntry from './RepoListEntry';

const mapStateToProps = (state) => ({
  apiKey: state.apiKey,
  issues: state.issues
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (issues) => dispatch(setIssues(issues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoListEntry);