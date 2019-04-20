import { connect } from 'react-redux';
import RepoList from './RepoList';

const mapStateToProps = (state) => ({
  repos: state.repos,
});

export default connect(
  mapStateToProps
)(RepoList);