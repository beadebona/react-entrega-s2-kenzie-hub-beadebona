import StyledHeader from "./style";

const Header = ({ children, header, text, ...rest})=>{
    return(
        <StyledHeader header={header}>
            {children}
            <button {...rest}>{text}</button>
        </StyledHeader>

    )
}

export default Header