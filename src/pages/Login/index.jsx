
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Container from "./style"

const Login = ()=>{
    const history = useHistory()

    return (
    <>
        <Logo/>
        <Container>
          
            <form>
                <h2>Login</h2>

                <Input placeholder="Digite seu nome" label="Nome"/>
                <Input placeholder="Digite sua senha" type="password" label="Senha"/>
                <Button text="Entrar"/>
                {/* <span>Ainda não possui uma conta?</span>
                <Link>Cadastre-se</Link> */}
            </form> 
            <span>Ainda não possui uma conta?</span>  
            <Button greySchema="true" text="Cadastre-se" onClick={() => history.push("/cadastro")}/>
        </Container>
    </>
    )
}

export default Login