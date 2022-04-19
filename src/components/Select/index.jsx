import StyledSelect from "./style";

const Select = ({register, name})=>{
    return(
        <StyledSelect>
            <label>Selecionar módulo</label>
            <select {...register(name)}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo </option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo </option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </select>

        </StyledSelect>
    )
}

export default Select
