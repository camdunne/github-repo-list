import { connect } from 'react-redux';
import IssuesList from './IssuesList';

const mapStateToProps = ({ issues }) => ({
  issues
});

export default connect(
  mapStateToProps
)(IssuesList);