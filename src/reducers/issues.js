const issues = (state = [], action) => {
  switch (action.type) {
  case 'SET_ISSUES':
    return action.issues;
  case 'REORDER_ISSUES':
    var { dropId, idx } = action;
    var draggedElement = state[dropId];
    var newState = [ ... state ];
    newState.splice(dropId, 1);
    newState.splice(idx, 0, draggedElement);

    return newState;
  default:
    return state;
  }
};

export default issues;