import styled from "styled-components";
import logo from "./img/logo.png";
export default function HeadContainer() {
  return (  <LogoContainer>
        <Imagelogo src={logo} />
        <TextContainer>ZapRecall</TextContainer>
    </LogoContainer>
  )
}
const LogoContainer = styled.div
    ` 
display: flex;
align-items: center;
margin: 40px 0 20px 0;
`
const Imagelogo = styled.img
    `width: 52px;`

const TextContainer = styled.h1
    `font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
color: #FFFFFF;
margin-left: 20px;`