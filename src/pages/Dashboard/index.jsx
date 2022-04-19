import { useHistory } from "react-router-dom"
import Header from "../../components/Header/index"


const Dashboard = ()=>{

    const history = useHistory()
    return(
        <>
        <Header header="true" text="Sair" onClick={()=>history.push('/')}/>
        </>
    )
}

export default Dashboard