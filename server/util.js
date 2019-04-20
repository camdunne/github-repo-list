function parseRepos(array) {
  return array.map(({ full_name, issues_url }) => {
    issues_url = issues_url.replace(/\{\/number\}/, '');

    return ({
      full_name,
      issues_url
    });
  });
}

function parseIssues(array) {
  return array.map(({ id, title, assignee, created_at, updated_at }) => {
    const assigneeAvatar = assignee && assignee.avatar_url;

    return ({
      id,
      title,
      assigneeAvatar,
      created_at,
      updated_at,
    });
  });
}

module.exports.parseRepos = parseRepos;
module.exports.parseIssues = parseIssues;