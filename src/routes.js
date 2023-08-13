import { Router } from "express";
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';



const routes = new Router();
import authMiddleware from './app/middlewares/auth';
import TaskController from "./app/controllers/TaskController";

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

//todas as rotas abaixo desse middleware precisam estar autenticado
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);



export default routes;
