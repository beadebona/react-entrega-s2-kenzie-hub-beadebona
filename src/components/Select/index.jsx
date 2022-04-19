import StyledSelect from "./style";

const Select = ({text, register, name, children, ...rest})=>{
    return(
        <StyledSelect>
            <label>Selecionar {text}</label>
            <select 
            {...register(name)}
            {...rest}
            >
                {children}

            </select>

        </StyledSelect>
    )
}

export default Select
