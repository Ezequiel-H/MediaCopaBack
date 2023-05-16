/* eslint-disable vars-on-top */
const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.send('Healthy!');
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/user', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
});

app.get('/historial', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
});

app.post('/historial', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
});

app.get('/punto_medio', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
});

app.get('/punto_medio/:id', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
});
