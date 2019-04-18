const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080


app.use(express.static(path.join(`${__dirname}/../public`)))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/repositories', (req, res) => {
  axios.get('https://api.github.com/user/repos', {
    Headers: {
      Authorization: `token ${req.body.apiKey}`
    }
  })
  .then((value) => {
    console.log(value)
    res.send('')
    
  })
  .catch((err) => {
    console.log(err)
    res.send('ERROR')
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})