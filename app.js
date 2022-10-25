import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import homeRoutes from './src/routes/homeRoutes';
import produtoRoutes from './src/routes/produtoRoutes';
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/home', homeRoutes);
    this.app.use('/produtos', produtoRoutes);
  }
}

export default new App().app;
