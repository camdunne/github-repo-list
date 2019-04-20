export const setApiKey = apiKey => ({
  type: 'SET_API_KEY',
  apiKey
});

export const setIssues = issues => ({
  type: 'SET_ISSUES',
  issues
});

export const reorderIssues = (dropId, idx) => ({
  type: 'REORDER_ISSUES',
  dropId,
  idx
});

export const setRepos = repos => ({
  type: 'SET_REPOS',
  repos
});
