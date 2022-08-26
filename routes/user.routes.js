import express from "express";
import User from "../models/User.js";

const user = express.Router();

user.get('/', (req, res) => {
    res.send('Rota de Usuários');
});

user.post('/register', async (req, res) => {
    const { name, email, password, admin } = req.body;

    const alreadyExistsUser = await User.findOne( // encontre email que existe e dá um erro
        { where: { email } }
    ).catch((err) => console.log("Error: ", err)); // caso já existe mostre um erro

    if (alreadyExistsUser) {
        return res  // pare a função async e mostre a mensagem na tela
            .status(409)  // status de informação de erro em http
            .json({ message: "E-mail já utilizado por outro usuário" })
    }

    const newUser = new User({ name, email, password, admin });
    const savedUser = await newUser.save().catch((err) => { // salvar novo usuario
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o usuário" })
    });

    if (savedUser) { // salva novo dado de usuario
        console.log(savedUser);
        res.json({ message: "Obrigado pelo cadastro!" })
    }

});

export default user;