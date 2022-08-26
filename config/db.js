import Sequelize from 'sequelize'; // importar a biblioteca Sequelize
import dotenv from 'dotenv'; // importar a biblioteca dotenv

// Load config => carregar configuração
dotenv.config({ path: './config/config.env' });

const connection = new Sequelize(
    // Definir parâmetros
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST
  }
);

export default connection;