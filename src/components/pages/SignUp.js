import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function submitForm(event){
        event.preventDefault();

        try {
            await axios.post("http://localhost:5000/signup", {
            name,
            email,
            password,
            confirmPassword
        });
        navigate("/")
        } catch (error){
            console.log(error);
        } 
    }
    
    return(
        <>
            <h1>My Wallet</h1>
            <form>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" />
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Senha"/>
                <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirmar Senha"/>
                <button type="submit" onClick={submitForm}>Cadastrar</button>

            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </>
    )
}