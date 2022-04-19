import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Container from "./style"
import axios from "axios"
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ()=>{
    
    const history = useHistory()
    const { register, handleSubmit } = useForm()


    const onSubmit = (data)=>{
        axios
        .post("https://kenziehub.herokuapp.com/sessions/", data)
        .then((response) => {
          console.log(response.data)
        })
        .catch(_ => toast.error("Email/senha incorreto!", {theme: "dark"}))
    }

    return (
    <>
        <Logo/>
        <Container>
          
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>

                <Input placeholder="Digite seu email" name="email" label="Email" register={register}/>
                <Input placeholder="Digite sua senha" name="password" type="password" label="Senha" register={register}/>
                <Button type="submit" text="Entrar"/>
            </form> 
            <span>Ainda não possui uma conta?</span>  
            <Button greySchema="true" text="Cadastre-se" onClick={() => history.push("/cadastro")}/>
        </Container>
    </>
    )
}

export default Login