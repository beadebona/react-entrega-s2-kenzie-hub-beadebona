import StyledUl from "./style";

const Ul = ({techs, handleModal}) =>{

    return(
    <StyledUl>
        {techs !== 0 ?techs.map((tech)=>{
            return(
                <li onClick={() =>handleModal(tech)} key={tech.id}>
                    <p>{tech.title} </p> 
                    <span>{tech.status}</span>
                </li>
            )
        }):(<></> )}
    </StyledUl>        
    )
}

export default Ul