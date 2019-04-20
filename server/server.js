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

  axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
    .then(({ data }) => {
      const repos = parseRepos(data);
      res.send(repos);
    
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
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
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});