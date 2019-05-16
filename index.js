// server/index.js
const express = require('express');
const path = require('path');

const PORT = 8200;

const app = express();
const resolvePath = path.resolve(__dirname, 'components')
console.log('resolvePath', resolvePath)
const static = express.static(resolvePath, {
  maxAge: '365d',
})


app.use(static);

app.listen(PORT);

console.log(`Listening on: http://localhost:${PORT}`);