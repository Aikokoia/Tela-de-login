import { useRef } from "react"
import { Link,useNavigate } from "react-router-dom"
import  api  from '../../services/api'

function Login(){
        const emailRef = useRef()
        const passwordRef = useRef()
        const Navigate = useNavigate()

async function submithandle(event){
        event.preventDefault()
        try{
        const { data:token } = await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
         }) 
          localStorage.setItem('Token',token)

          Navigate('/ListarUsuarios')
        }catch{
        alert("erro ao logar o usuario")}
}         
return (
        

        <div className="absolute bottom-80 left-140
         p-8 border white radius rounded-lg w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={submithandle}>
                <input type="email" ref={emailRef}  placeholder="email" className="w-sm mb-2 p-2 ml-2" id="email"/>
                <input type="password" ref={passwordRef}  placeholder="senha" className="w-sm mb-4 p-2 ml-2" id="senha"/>

                <button type="submit" className="w-sm" >
                    Entrar
                </button>
                <Link to="/" className="block text-center">Não tem uma conta? Faça o cadastro</Link>
                </form>
        </div>
)
}

export default Login