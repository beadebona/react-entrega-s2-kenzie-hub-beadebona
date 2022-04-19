import StyledInfo from "./style"

const UserInfo = ({user})=>{
    return(
        <StyledInfo>
            <h3>{user.name}</h3>
            <p>{user.course_module}</p>
        </StyledInfo>
    )
}

export default UserInfo