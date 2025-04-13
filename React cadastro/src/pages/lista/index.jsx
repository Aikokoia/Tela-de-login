import api from "../../services/api"
import { useEffect,useState } from "react" 
function ListaUsuarios() {
    const [ListUsers, setListUsers] = useState()
    
    useEffect(() => {
    async function LoadUsers(){

       const token =  localStorage.getItem('Token')
       console.log(token)

    
       const {data: {users}, } = await api.get('/list', {headers: { Authorization: `Bearer ${token}`}
    })
    setListUsers(users)
    }    
   
    LoadUsers()
      } ,[] ) 

    return(
        <div className=" absolute bottom-50 left-140
         p-8 border white radius rounded-lg w-md">
            <h2 className="text-2xl font-bold mb-4">
            Lista de Usuários
            </h2>
            <ul>
                {ListUsers && ListUsers.length > 0 && ListUsers.map((user) => (
                    <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.id}</p>
                    <p>{user.email}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default ListaUsuarios