import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import swaggerFile from './swagger/swagger_output.json';

dotenv.config();
import homeRoutes from './src/routes/homeRoutes';
import produtoRoutes from './src/routes/produtoRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
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
    this.app.use(cors());
  }

  routes() {
    this.app.use('/home', homeRoutes);
    this.app.use('/produtos', produtoRoutes);
    this.app.use('/usuarios', usuarioRoutes);
    this.app.use('/foto', fotoRoutes);
    this.app.use('/login', tokenRoutes);
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }
}

export default new App().app;
