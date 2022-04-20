import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Container from "../Login/style"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Redirect } from "react-router-dom"
import Logo from "../../components/Logo"

const SignUp = ({authenticated})=>{
    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string()
          .required("Email obrigatório")
          .email("Email inválido") ,
        name: yup.string()
          .required("Nome obrigatório") ,
        password: yup.string()
          .required("Senha obrigatória")
          .min(6, "Mínimo de 6 dígitos!"),
        passwordConfirm: yup.string()
          .required('Confirme a senha')
          .oneOf([yup.ref('password')], "As senhas não estão iguais"),
        contact: yup.string().required("Coloque o link do seu LinkedIn ou alguma forma de contato"),
        bio: yup.string().required("Escreva algo sobre voce!")
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    errors.name?toast.error(errors.name.message, {toastId: 1 , theme: "dark"}):<></>
    errors.email?toast.error(errors.email.message, {toastId: 2, theme: "dark"}):<></>
    errors.password?toast.error(errors.password.message, {toastId: 3, theme: "dark"}):<></>
    errors.passwordConfirm?toast.error(errors.passwordConfirm.message, {toastId: 4, theme: "dark"}):<></>
    errors.contact?toast.error(errors.contact.message, {toastId: 5, theme: "dark"}):<></>
    errors.bio?toast.error(errors.bio.message, {toastId: 6, theme: "dark"}):<></>

    const submit = ({contact,course_module,email,bio,name,password})=>{
        const user =  {email,password,name,bio,contact,course_module}
        axios
        .post("https://kenziehub.herokuapp.com/users/", user)
        .then((_) => {
            toast.success("Conta criada com sucesso!", {theme: "dark"})
            history.push("/")
        })
        .catch(_ => toast.error("Ops! Tente outro email", {theme: "dark"}))

    }
    if(authenticated){
        return <Redirect to="/dashboard"/>
    }

    return(
        <>
        <Header text="Voltar" onClick={()=>history.push("/")} >
            <Logo/>
        </Header>

        <Container>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(submit)}>
                <Input placeholder="Digite seu nome" name="name" label="Nome" register={register}/>
                <Input placeholder="Digite seu email" name="email" label="Email" register={register}/>
                <Input placeholder="Link do seu linkedIn" name="contact" label="LinkedIn" register={register}/>
                <Input placeholder="Fale um pouco de você" name="bio" label="Bio" register={register}/>
                <Input placeholder="Digite sua senha" name="password" type="password" label="Senha" register={register}/>
                <Input placeholder="Digite sua senha" name="passwordConfirm" type="password" label="Confirmar Senha" register={register} />       
                <Select name="course_module" register={register} text="Módulo">
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend) </option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </Select>
                <Button type="submit" text="Cadastrar"/>
            </form>
        </Container>
        </>
    )
}

export default SignUp