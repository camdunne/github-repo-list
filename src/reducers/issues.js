const issues = (state = [], action) => {
  switch (action.type) {
  case 'SET_ISSUES':
    return action.issues;
  case 'REORDER_ISSUES':
    var dropId = Number(action.dropId);
    var draggedElement = state[dropId];
    var insertBeforeElement = state[action.idx];
    var newState = [ ... state ];
    newState.splice(dropId, 1);
    var newIdx = newState.indexOf(insertBeforeElement);
    newState.splice(newIdx, 0, draggedElement);

    return newState;
  default:
    return state;
  }
};

export default issues;