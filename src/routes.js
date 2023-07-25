import { Router } from "express";
import User from './app/models/User';



const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'ugabuga',
    email: 'fortnite@fortnite.com',
  password_hash: 'coxinha69',
  })
  return res.json(user);
})

export default routes;
