const express = require('express');
const app = express();

const serveHome= (req, res, next) => {
  res.send('<h1>Home</h1>');
}

const serveAbout = (req, res, next) => {
  res.send('<h1>About</h1>');
}

const serveHello = (req, res, next) => {
  const name = req.query.name || 'world'
  res.send('Hello ' + name)
}

const serveData = (req, res, next) => {
  const data = [{name: 'angelica'}, {name: 'justin'}, {name: 'rafi'}]
  res.send(data)
}

app.get('/', serveHome);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData)

const port = 8080;
app.listen(port, () => console.log(`listening  to ${port}`));