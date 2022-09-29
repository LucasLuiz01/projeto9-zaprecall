import styled from "styled-components"

export default function Footer (props){

    const collorsButton = ["#FF3030", "#FF922E", "#2FBE34"]
    return (
        <FooterConcluded>
        <ContainerButtons>
            <ButtonDontRemember color={collorsButton[0]} type="button" onClick={() => props.onClick("Não lembrei")}>Não lembrei</ButtonDontRemember>
            <ButtonDontRemember color={collorsButton[1]} type="button" onClick={() => props.onClick("Quase não lembrei")}>Quase não lembrei</ButtonDontRemember>
            <ButtonDontRemember color={collorsButton[2]} type="button" onClick={() => props.onClick("Zap!")}>Zap!</ButtonDontRemember>
        </ContainerButtons>
        <CounterText>0/8 CONCLUÍDOS</CounterText>
    </FooterConcluded>
    )
}
const FooterConcluded = styled.div
    `width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`
const CounterText = styled.p
`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`
const ContainerButtons = styled.div
    `
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const ButtonDontRemember = styled.button
    `width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${(props)=>props.color};
  border-radius: 5px;
  border: 1px solid ${(props)=>props.color};
  padding:5px;
  `