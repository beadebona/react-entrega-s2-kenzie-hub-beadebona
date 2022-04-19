import StyledContainer from "../Modal/style";
import Input from "./../Input"
import Select from "./../Select"
import Button from "./../Button"
import Header from "./../Header"
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify'

const ModalCad = ({modalCad, setModalCad, loadTechs}) =>{
    const { register, handleSubmit} = useForm()

    const handleClosingCad = ()=>{
        setModalCad(false)
    }
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

    const onSubmit = (data) =>{
        axios.post("https://kenziehub.herokuapp.com/users/techs", 
        data ,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        })
        .then(_ => {
            loadTechs() 
            setModalCad(false)
            toast.success("Tecnologia adicionada!", {theme: "dark"})
        })
        .catch(_ => {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        })
    
    }
    
    return(
    <StyledContainer  newTechSchema  open={modalCad} >
        <dialog open={modalCad}> 
            <Header text="X" onClick={handleClosingCad}>
                    <p>Cadastrar Tecnologia</p>    
           </Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="title" label="Nome" register={register}/>
                <Select name="status" register={register} text="status" >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>

                </Select>
                <Button type="submit" text="Cadastrar Tecnologia"/>

                
            </form>
        </dialog>
    </StyledContainer>
    )
}

export default ModalCad