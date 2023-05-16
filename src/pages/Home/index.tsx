import * as C from "./style";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


function Home (){
    const { user_data, logOut } = useAuth();
    const navigate = useNavigate();

    console.log(user_data);
     
    return(
    <C.Container> 
      <h1>Página Inicial</h1>
      <h2>Olá, {user_data.nome}!</h2>
      <div style={{marginBottom:'30px'}}> {user_data.email} </div>
      <Button Text='Sair' onClick={() => { logOut(); navigate("/");} } />
    </C.Container>
    )
};

export default Home;