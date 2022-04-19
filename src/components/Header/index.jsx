import Logo from "../Logo";
import StyledHeader from "./style";

const Header = ({header, text, ...rest})=>{
    return(
        <StyledHeader header={header}>
            <Logo/>
            <button {...rest}>{text}</button>
        </StyledHeader>

    )
}

export default Header