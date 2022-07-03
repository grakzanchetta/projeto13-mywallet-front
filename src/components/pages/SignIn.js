import { Link } from "react-router-dom"

export default function SignIn(){
    return(
        <>
            <h1>Sou a página principal</h1>
            <Link to="/signup">Primeira vez? Cadastre-se!</Link>
        </>
    )
}