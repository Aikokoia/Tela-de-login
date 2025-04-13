import express, { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt, { genSalt } from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const JWTSECRET = process.env.JWT_Secrets 

const rotas = express.Router()

//rota de cadastro 
rotas.post('/cadastro' , async(req, res ) => {
        const userinfo = req.body
        const user = await prisma.user.findUnique ({
                where: {email: userinfo.email, // vai procurar pelo email recebido pela variavel userinfo la no frontend
               }
               })   
               if (user){
                       return res.status(400).json({message: "Usuário já existe"})
               }

        try{
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const passwordhashed = await bcrypt.hash(user.password , salt)

        const userdb = await prisma.user.create({data:
                {
                email: user.email,
                name: user.name,
                password: passwordhashed,
                }
})

        res.status(201).json(userdb)
}catch(error){ res.status(500).json({message: "erro no servidor tente novamente"})
 } 
})
//rota de login 
rotas.post('/login', async (req, res) => {

        try {
        const userinfo = req.body //vai receber o email para logar 

        const user = await prisma.user.findUnique ({
         where: {email: userinfo.email, // vai procurar pelo email recebido pela variavel userinfo la no frontend
        }
        })   
        if (!user){ // verifica se o usuario existe 
                return res.status(404).json({message: "Usuário não encontrado "})
        }
        //compara a senha do banco com a senha que foi digitada pelo usuário 
        const isMatch = await bcrypt.compare(userinfo.password, user.password)
        if (!isMatch){res.status(404).json({"message": "Senha invalida"})} else {
        const token =jwt.sign({id: user.id}, JWTSECRET ,{ expiresIn:'7d'})
        res.status(200).json(token)
        }
        //gerar o token JWT
        
}catch(error){ res.status(500).json({message: "erro no servidor tente novamente"})
} 
})

export default rotas