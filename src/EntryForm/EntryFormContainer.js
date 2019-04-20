import { connect } from 'react-redux'
import { setApiKey, setIssues, setRepos } from '../actions'
import EntryForm from './EntryForm'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (key) => dispatch(setApiKey(key)),
  onSetApiKey: (apiKey) => dispatch(setApiKey(apiKey)),
  onSetIssues: (issues) => dispatch(setIssues(issues)),
  onSetRepos: (repos) => dispatch(setRepos(repos))
});

export default connect(
  null,
  mapDispatchToProps
)(EntryForm)