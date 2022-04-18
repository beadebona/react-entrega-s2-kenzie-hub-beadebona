import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Select from "../../components/Select"
import Container from "../Login/style"
import StyledDiv from "./style"

const SignUp = ()=>{
    const history = useHistory()
    return(
        <>
        <StyledDiv>
            <Logo/>
            <Button onClick={()=> history.push('/')} text="Voltar"/>   
        </StyledDiv>

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