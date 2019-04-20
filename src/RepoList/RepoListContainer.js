import { connect } from 'react-redux';
import RepoList from './RepoList';

const mapStateToProps = ({ repos }) => ({
  repos,
});

export default connect(
  mapStateToProps
)(RepoList);