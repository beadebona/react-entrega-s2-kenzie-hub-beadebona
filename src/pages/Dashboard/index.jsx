import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/index"
import UserInfo from "../../components/UserInfo"
import StyledContainer from "./style"

const Dashboard = ({authenticated, setAuthenticated, user, setUser}) =>{

    const history = useHistory()

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.clear()
        setUser({})
        return history.push('/')
    }
    console.log(user)
    if(!authenticated){
        return <Redirect to="/"/>
    }
    return(
        <>
        <Header header="true" text="Sair" onClick={handleLogout}/>
        <hr/>
        <UserInfo user={user}/>
        <hr/>
       <StyledContainer>
           <h3>Tecnologias</h3>
           <button>+</button>  
       </StyledContainer>
       
    
        </>
    )
}

export default Dashboard