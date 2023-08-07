import { Router } from "express";
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';



const routes = new Router();
import authMiddleware from './app/middlewares/auth';

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

//todas as rotas abaixo desse middleware precisam estar autenticado
routes.use(authMiddleware);

routes.put('/users', UserController.update);



export default routes;
