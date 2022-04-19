import StyledInput from "./style";

const Input = ({label, name, register, ...rest}) =>{
    return(
        <StyledInput>
            <label>{label}</label>
            <div>
                <input 
                {...rest} 
                {...register(name)}
                  />
            </div>
        </StyledInput>
    )
}

export default Input;