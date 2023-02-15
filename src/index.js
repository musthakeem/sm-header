const express = require('express');
const app = express();

app.get('/headers', (req, res) => {
  const headers = req.headers;

  // Create an HTML string with the header information
  let html = '<!DOCTYPE html><html><head><title>HTTP Request Headers</title></head><body><h1>HTTP Request Headers</h1><ul>';
  Object.entries(headers).forEach(([key, value]) => {
    html += `<li><strong>${key}:</strong> ${value}</li>`;
  });
  html += '</ul></body></html>';

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
