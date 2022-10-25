import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Produto from '../models/Produto';
import Usuario from '../models/Usuario';

const models = [Produto, Usuario];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
