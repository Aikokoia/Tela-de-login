import { useRef } from "react"
import { Link } from "react-router-dom"
import  api  from '../../services/api'

function Cadastro(){

        const nameRef = useRef()
        const emailRef = useRef()
        const passwordRef = useRef()

        async function submithandle(event) {
                event.preventDefault();
            
                const name = nameRef.current.value.trim();
                const email = emailRef.current.value.trim();
                const password = passwordRef.current.value.trim();
            
                if (!name || !email || !password) {
                  alert("Por favor preencha os dados corretamente");
                  return;
                }
                
                try {
                  await api.post("/cadastro", {
                    name,
                    email,
                    password,
                  });
                  alert("Usuário cadastrado");
                } catch {
                  alert("Erro ao cadastrar o usuário");
                }
              }

                
return (
        

        <div className="absolute bottom-80 left-140
         p-8 border white radius rounded-lg w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
            <form onSubmit={submithandle}>
                <input type="text" ref={nameRef}  placeholder="nome" className="w-sm mb-4 p-2 ml-2" id="nome" />
                <input type="email" ref={emailRef}  placeholder="email" className="w-sm mb-2 p-2 ml-2" id="email"/>
                <input type="password" ref={passwordRef}  placeholder="senha" className="w-sm mb-4 p-2 ml-2" id="senha"/>

                <button type="submit" className="w-sm" >
                    Cadastre-se
                </button><br></br>
                <Link to="/login" className="block text-center">Ja tem uma conta? Faça o Login</Link>
                </form>
        </div>
)
}

export default Cadastro