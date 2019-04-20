export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (!serializedState) return;

    return JSON.parse(serializedState);
  } catch {
    return;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
  } catch {
    return;
  }
};