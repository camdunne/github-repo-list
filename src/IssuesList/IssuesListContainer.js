import { connect } from 'react-redux';
import IssuesList from './IssuesList';

const mapStateToProps = (state) => ({
  issues: state.issues
});

export default connect(
  mapStateToProps
)(IssuesList);