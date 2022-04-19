import StyledButton from "./style";

const Button = ({text, greySchema, ...rest })=>{
    return <StyledButton greySchema={greySchema} {...rest}>{text}</StyledButton>
}

export default Button;