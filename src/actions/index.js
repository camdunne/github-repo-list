export const setApiKey = apiKey => ({
  type: 'SET_API_KEY',
  apiKey
});

export const setIssues = issues => ({
  type: 'SET_ISSUES',
  issues
});

export const reorderIssues = id => ({
  type: 'REORDER_ISSUES',
  id
});

export const setRepos = repos => ({
  type: 'SET_REPOS',
  repos
});
