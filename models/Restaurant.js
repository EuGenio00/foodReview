import Sequelize from 'sequelize'; // importar a biblioteca Sequelize
import connection from '../config/db.js'; // importar a "connection" localizada na pasta config

// criar o modelo
const Restaurant = connection.define( // função define
    'restaurant', // nome base do modelo 
    // define as propriedades do modelo de restaurante no seguinte objeto
    {
        id: {
            type: Sequelize.INTEGER, // reconhece um numero inteiro pelo Sequelize
            autoIncrement: true, // o numero id é dado automaticamente
            allowNull: false, // Não permite que seja nulo
            primaryKey: true // reconhece chave primaria
        },
        name: {
            type: Sequelize.STRING, // permite um valor string
            allowNull: false
        },
        type: {
            type: Sequelize.STRING, // permite um valor string
            allowNull: false
        },
        description: {
            type: Sequelize.STRING, // permite um valor string
            allowNull: false
        },
        address: {
            type: Sequelize.STRING, // permite um valor string
            allowNull: false
        }
    }

);

export default Restaurant;