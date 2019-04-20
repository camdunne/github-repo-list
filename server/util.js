function parseRepos(array) {
  return array.map(({ full_name, issues_url }) => {
    issues_url = issues_url.replace(/\{\/number\}/, '')
    return ({
      full_name,
      issues_url
    });
  })
}

function parseIssues(array) {
  return array.map(({ title, assignee, created_at, updated_at }) => {
    const assigneeAvatar = assignee.avatar_url
    return ({
      title,
      assigneeAvatar,
      created_at,
      updated_at,
    });
  })
}

module.exports.parseRepos = parseRepos
module.exports.parseIssues = parseIssues