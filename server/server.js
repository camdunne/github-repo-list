const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 8080;
const { parseRepos, parseIssues } = require('./util');

app.use(express.static(path.join(`${__dirname}/../public`)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/repositories', (req, res) => {
  const { apiKey } = req.body;
  // upper limit of 1000 repositories in response, default is 30
  axios.get('https://api.github.com/user/repos?per_page=1000', {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
    .then(({ data }) => {
      const repos = parseRepos(data);
      res.send(repos);
    
    })
    .catch(() => {
      res.send([]);
    });
  
});

app.post('/api/issues', (req, res) => {
  const { apiKey, repo: { issues_url } } = req.body;

  if (!issues_url) {
    res.send([]);

    return;
  }
  axios.get(issues_url, {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
    .then(({ data }) => {
      let issues;
      try {
        issues = parseIssues(data);
      } catch(e) {
        issues = [];
      }
      res.send(issues);
    })
    .catch(() => {
      res.send([]);
    });
});

app.listen(port, () => {
  /*eslint no-console: "off"*/
  console.log(`Example app listening on port ${port}!`);
});