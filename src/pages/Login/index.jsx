import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Container from "./style"
import axios from "axios"
import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



const Login = ({setAuthenticated, authenticated, setUser})=>{
    
    const history = useHistory()
    const formSchema = yup.object().shape({
        email: yup.string()
          .required("Email obrigatório")
          .email("Email inválido") ,
        password: yup.string()
          .required("Senha obrigatória")
          .min(6, "Mínimo de 6 dígitos!"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:yupResolver(formSchema)
    })

    errors.email?toast.error(errors.email.message, {toastId: 2, theme: "dark"}):<></>
    errors.password?toast.error(errors.password.message, {toastId: 3, theme: "dark"}):<></>


    const onSubmit = (data)=>{
        axios
        .post("https://kenziehub.herokuapp.com/sessions/", data)
        .then((response) => {
          const {token, user} = response.data
          localStorage.setItem("@KenzieHub:token", JSON.stringify(token))
          localStorage.setItem("@KenzieHub:user", JSON.stringify(user))
          setUser(JSON.parse(localStorage.getItem("@KenzieHub:user")))
          setAuthenticated(true)
        })
        .then(()=>{
            return history.push("/dashboard")
        })
        .catch(_ => toast.error("Email/senha incorreto!", {theme: "dark"}))
    }

    if(authenticated){
        return <Redirect to="/dashboard"/>
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