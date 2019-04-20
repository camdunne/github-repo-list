const issues = (state = [], action) => {
  switch (action.type) {
  case 'SET_ISSUES':
    return action.issues
  default:
    return state
  }
}

export default issues;