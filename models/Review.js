import Sequelize from 'sequelize'; // importar a biblioteca Sequelize
import connection from '../config/db.js'; // importar a "connection" localizada na pasta config

// criar o modelo
const Review = connection.define( // função define
    'review', // nome base do modelo 
    // define os modelos do restaurante no seguinte objeto
    {
        id: {
            type: Sequelize.INTEGER, // reconhece um numero inteiro pelo Sequelize
            autoIncrement: true, // o numero id é dado automaticamente
            allowNull: false, // Não permite que seja nulo
            primaryKey: true // reconhece chave primaria
        },
        idUser: {
            type: Sequelize.INTEGER, // permite um valor string
            allowNull: false
        },
        idRestaurant: {
            type: Sequelize.INTEGER, // permite um valor string
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING, // permite um valor string
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER, // permite um valor string
            allowNull: false
        }
    }

);

export default Review;