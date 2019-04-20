const repos = (state = [], action) => {
  switch (action.type) {
  case 'SET_REPOS':
    return action.repos;
  default:
    return state;
  }
};

export default repos;