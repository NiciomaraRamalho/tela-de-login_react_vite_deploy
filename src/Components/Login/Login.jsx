import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { useState } from "react";
import "./Login.css";



const Login = () => {
  const [username, setUsername]= useState ("");
  const [password, setPassword]= useState ("");

  const handleSubmit = (event)=> {
    event.preventDefault();
    // console.log("teste",username, password)
    // console.log("Envio")
    alert("Enviando os dados: " + username + " - " + password)
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <h1>Acesse o Sistema</h1>
        <div className="input-field"> <input type="email" placeholder='E-mail' onChange={(e)=>setUsername(e.target.value) } />
        <FaUser className='icon'/></div>

        <div className="input-field"><input type="passaword" placeholder='Senha' onChange={(e)=>setPassword(e.target.value) } />
        <FaLock className='icon'/></div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
             Lembre de mim
          </label>

          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
        <div className="signup-link"> 
          <p>Não tem uma conta? <a href="#">Registrar</a></p>

        </div>
        
      </form>
    </div>
  )
}


export default Login
