import express from 'express'
import { PrismaClient } from '@prisma/client'

const rotas = express.Router()
const prisma = new PrismaClient()

rotas.get('/list', async(req,res) => {
    try{
            const users = await prisma.user.findMany({omit: {password: true} })
            return res.status(200).json({"message": "Usuarios listados com sucesso", users})


    }
    catch(error){
        
    }})


export default rotas 