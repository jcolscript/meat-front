import * as jsonServer from 'json-server';
import { Express } from 'express';

const server: Express = jsonServer.create();
const router = jsonServer.router('./../db.json');
const middlewares = jsonServer.defaults();

import { authentication } from './auth';

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota para login
server.post('/login', authentication);

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
