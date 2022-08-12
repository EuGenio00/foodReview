import Sequelize from 'sequelize'; // importar a biblioteca Sequelize
import dotenv from "dotenv"; // importar a biblioteca dotenv

// Load config => carregar configuração
dotenv.config({ path: './config/config.env' });

export const connection = new Sequelize(
  // Definir parâmetros
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST
  }
);

export default async function testConn(){
  try {
    await connection.authenticate();
    console.log("connection has benn established sucessfully")
  } catch(error) {
    console.error("unable to connect to the database: ", error);
  }
};

// export default connection;