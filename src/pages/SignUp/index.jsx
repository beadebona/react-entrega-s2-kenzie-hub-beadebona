import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Container from "../Login/style"


const SignUp = ()=>{
    const history = useHistory()

    return(
        <>
        <Header text="Voltar" onClick={()=>history.push('/')} />

        <Container>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
            <form>
                <Input placeholder="Digite seu nome" label="Nome"/>
                <Input placeholder="Digite seu email" label="Email"/>
                <Input placeholder="Digite sua senha" type="password" label="Senha"/>
                <Input placeholder="Digite sua senha" type="password" label="Confirmar Senha"/>
                
                    
                <Select/>
                <Button text="Cadastrar"/>
            </form>
        </Container>
        </>
    )
}

export default SignUp