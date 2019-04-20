import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => ({
  apiKey: state.apiKey
});

export default connect(
  mapStateToProps
)(App)