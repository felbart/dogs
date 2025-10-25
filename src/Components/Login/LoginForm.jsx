import { useState } from "react"
import { Link } from "react-router-dom"


const LoginForm = () => {

    const [userName, setUserName] = useState();
    const [Password, setPassword] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token' ,
        {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json', 
            },
            body: JSON.stringify({ userName, Password }),
        }).then(response => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
        })
    }

  return (
    <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <input
            type="text"
            value={userName}
            onChange={({target}) => setUserName (target.value)}
            />
            <input
            type="text"
            value={Password}
            onChange={({target}) => setPassword (target.value)}
            />
            <button>Entrar</button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
        <Link to="/login/perdeu">Perdeu a senha</Link>
    </section>
  )
}

export default LoginForm