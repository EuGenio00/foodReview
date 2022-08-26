import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const login = express.Router();

// login.get('/', (req, res) => {
//     res.send('Rota de Login');
// });

login.post('/', async (req, res) => {
    // Reeber as informações de LOGIN
    const { email, password } = req.body; // cria as variaveis email e password e atribua na sua requisição do tipo body

    // Buscar EMAIL no Banco de Dados e armazenar
    const registeredUser = await User.findOne(
        { where: { email }}
    ).catch(
        (err) => {
            console.log("Error: ", err);
        }
    )

    if(!registeredUser)
    return res
        .status(400)
        .json({ message: "Email ou Senha Inválidos." })


    // Validar a SENHA do Usuário

    if(!bcrypt.compareSync(password, registeredUser.password) )
    return res
        .status(400)
        .json({ message: "Email ou Senha Inválidos." })
   
        // Geração do TOKEN
        const token = Jwt.sign(

            // PAYLOAD: o que será armazenado no TOKEN
            {
                id: registeredUser.id,
                email: registeredUser.email
            }, 
            // Secret or Private Key
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.json({
            message: "Bem-vindo!",
            token: token
        })

});

// res.send(registeredUser);

export default login;

/* ## TOKEN ##

USUARIO POSTA EMAIL E SENHA
SERVIDOR RECEBE EMAIL E SENHA
SERVIDOR VERIFICA SE EMAIL ESTÁ CADASTRADO
SERVIDOR VALIDA A SENHA

{ GERAÇÃO DE TOKEN DE ACESSO }


SERVIDOR ENVIA CONFIRMAÇÃO DE LOGIN AO USUÁRIO */