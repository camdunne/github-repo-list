import { connect } from 'react-redux';
import { setIssues } from '../actions';
import RepoListEntry from './RepoListEntry';

const mapStateToProps = ({ apiKey, issues }) => ({
  apiKey,
  issues,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (issues) => dispatch(setIssues(issues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoListEntry);