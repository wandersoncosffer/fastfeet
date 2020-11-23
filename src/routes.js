import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMidleware from './app/middlewares/auth';

const routes = new Router();

// sessions
routes.post('/sessions', SessionController.store);

// index()
routes.get('/', (req, res) => {
  return res.json({ message: 'ok' });
});

routes.use(authMidleware);

// store()
routes.post('/users', UserController.store);

// update()
routes.put('/users', UserController.update);

export default routes;
