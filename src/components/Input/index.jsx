import StyledInput from "./style";

const Input = ({label, name, register,setTitle, ...rest}) =>{
    return(
        <StyledInput>
            <label>{label}</label>
            <div>
                <input 
                {...register(name)}
                {...rest} 
                  />
            </div>
        </StyledInput>
    )
}

export default Input;