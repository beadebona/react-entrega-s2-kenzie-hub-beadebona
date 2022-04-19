import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/index"
import UserInfo from "../../components/UserInfo"
import StyledContainer from "./style"
import Ul from "../../components/Ul"
import Modal from "../../components/Modal"
import Logo from "../../components/Logo"
import { useEffect, useState } from "react"
import ModalCad from "../../components/ModalCad"
import axios from "axios"

const Dashboard = ({authenticated, setAuthenticated, user, setUser}) =>{

    const history = useHistory()
    const [modal, setModal] = useState(false)
    const [modalCad, setModalCad] = useState(false)
    const [techs, setTechs] = useState([])
    const [ title, setTitle] = useState("")
    const [ status, setStatus] = useState("Iniciante")
    const [id, setId] = useState("")

    const loadTechs = ()=>{
        axios
        .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
        .then((response) => { setTechs(response.data.techs) })
    }

    useEffect(() => {
        loadTechs()
    } , [])

    const handleModal = (data) =>{
        setModal(true)
        setId(data.id)
        setTitle(data.title)
        setStatus(data.status)
    }


    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.clear()
        setUser({})
        return history.push('/')
    }

    if(!authenticated){
        return <Redirect to="/"/>
    }

    return(
        <>
        <Header header="true" text="Sair" onClick={handleLogout}>
            <Logo/>
        </Header>
        <hr/>
        <UserInfo user={user}/>
        <hr/>
       <StyledContainer>
           <h3>Tecnologias</h3>
           <button onClick={()=>setModalCad(true)} >+</button>  
       </StyledContainer>
       <Ul techs={techs} handleModal={handleModal} />
        <Modal
            modal={modal} 
            setModal={setModal} 
            loadTechs={loadTechs}
            id={id}
            title={title}
            status={status}
            setStatus={setStatus}
        />
        <ModalCad 
            setModalCad={setModalCad} 
            modalCad={modalCad} 
            loadTechs={loadTechs}
            />
        </>
    )
}

export default Dashboard