import StyledContainer from "./style";
import Input from "./../Input"
import Select from "./../Select"
import Button from "./../Button"
import Header from "./../Header"
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify'

const Modal = ({ modal, title, setModal, loadTechs, id, status, setStatus}) =>{

    const handleClosing = ()=>{
        setModal(false)
    }

    const { register, handleSubmit} = useForm()
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

    const onSubmit = (data) =>{
        axios.put(`https://kenziehub.herokuapp.com/users/techs/${id}`, data,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        })
        .then(res => {
            setModal(false)
            loadTechs()
            toast.success("Tecnologia alterada!", {theme: "dark"})
        })
        .catch(_ => {toast.error("Ops! Algo deu errado", {theme: "dark"})})
    }
    

    const deleteTech = (id)=>{
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        })
        .then(_ => {
            loadTechs()
            setModal(false)
            toast.success("Tecnologia excluída!", {theme: "dark"})
        })
        .catch(_ => {toast.error("Ops! Algo deu errado", {theme: "dark"})})
    }

    return (
        
        <StyledContainer open={modal}  >
            <dialog open={modal}> 
           <Header text="X" onClick={handleClosing}>
           <p>Tecnologia Detalhes</p> 
               
           </Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name="title" 
                    label="Nome" 
                    value={title}
                    register={register}
                />
                <Select 
                    name="status" 
                    register={register} 
                    text="status" 
                    value={status}
                    onChange={(event) =>setStatus(event.target.value)}
                    >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>

                </Select>
                <Button type="submit" text="Salvas Alterações"/>
                
            </form>
            <div className="box">
            
            <Button greySchema onClick={()=>deleteTech(id)} text="Excluir"/>
            </div>

            </dialog>
        </StyledContainer>
    )
}

export default Modal