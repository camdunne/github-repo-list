const apiKey = (state = "", action) => {
  switch (action.type) {
  case 'SET_API_KEY':
    return action.apiKey;
  default:
    return state;
  }
};

export default apiKey;