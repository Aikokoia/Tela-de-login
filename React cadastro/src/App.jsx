import { BrowserRouter,Routes,Router,Navigate, Route} from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
import ListaUsuarios from "./pages/lista"

function App() {


  return (
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Cadastro/>}/>

            <Route path="/Login" element={<Login/>}/>
            
            <Route path="/ListarUsuarios" element={<ListaUsuarios/>}/>
           
        </Routes>
      </BrowserRouter>
          
        )}

      
export default App
