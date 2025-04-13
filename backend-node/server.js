import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import cors from 'cors'

import auth from './middleware/auth.js'

const app = express()
app.use(express.json())// avisando para a aplicação que usaremos json
app.use(cors())

//precisamos criar 3 rotas 
// login, cadastro e uma rota privada para listagem de usuarios 

app.use('/', publicRoutes)
app.use('/', auth,privateRoutes)

app.listen(3333, () => console.log('servidor rodando'))

//Alex2204
//EZGHj7RorgJ0dnEA
//mongodb+srv://Alex2204:<db_password>@users.pl97c1j.mongodb.net/?retryWrites=true&w=majority&appName=Users