import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";

export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function submitForm(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:5000/signin", {
                email,
                password
            });
        navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <h1>My Wallet</h1>
            <form>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Senha"/>
                <button type="submit" onClick={submitForm}>Entrar</button>
            </form>
            <Link to="/signup">Primeira vez? Cadastre-se!</Link>
        </>
    )
}