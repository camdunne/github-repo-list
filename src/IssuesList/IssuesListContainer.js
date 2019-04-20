import { connect } from 'react-redux'
import IssuesList from './IssuesList'

const mapStateToProps = (state, ownProps) => ({
  issues: state.issues
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesList)