const http = require('http');
const debug = require('debug')('ode-angular');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
