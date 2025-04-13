import jwt from 'jsonwebtoken'

const jwtsecret = process.env.JWT_Secrets

const auth = (req, res, next) => {

    const token = req.headers.authorization
    console.log(token)
    if (!token){
        return res.status(401).json({"message": "Acesso negado"})
    }
    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''),jwtsecret)
        req.userId = decoded.id

        
    }catch(error){
        return res.status(401).json({"message": "Token invalido"})
    }
    next()
}
    
export default auth