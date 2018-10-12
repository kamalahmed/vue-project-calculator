const express = require('express');
const serverStatic = require('server-static');
const path  = require('path');

const app = express();
// serve app from the dist directory
app.use('/', serverStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 8080;
app.listen(port);
