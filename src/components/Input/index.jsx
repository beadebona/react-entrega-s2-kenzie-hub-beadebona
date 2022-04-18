import StyledInput from "./style";

const Input = ({label, ...rest}) =>{
    return(
        <StyledInput>
            <label>{label}</label>
            <div>
                <input {...rest}/>
            </div>
        </StyledInput>
    )
}

export default Input;