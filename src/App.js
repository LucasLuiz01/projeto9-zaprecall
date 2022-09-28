import styled, { StyledComponent } from "styled-components"
import iconeCerto from "./img/icone_certo.png"
import iconeErro from "./img/icone_erro.png"
import iconequase from "./img/icone_quase.png"
import logo from "./img/logo.png"
import party from "./img/party.png"
import sad from "./img/sad.png"
import setaplay from "./img/seta_play.png"
import setavirar from "./img/seta_virar.png"


export default function App() {
    const collorsButton = ["#FF3030", "#FF922E", "#2FBE34"]
    const QuestionNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <ScreenContainer>
            <LogoContainer>
                <Imagelogo src={logo} />
                <TextContainer>ZapRecall</TextContainer>
            </LogoContainer>
             {QuestionNumbers.map((n)=>
               <QuestionClose key={n}><TextQuestionClose> Pergunta{n} </TextQuestionClose><img src={setaplay}/></QuestionClose>
               )} 
            <FooterConcluded>
                <ContainerButtons>
                    <ButtonDontRemember color={collorsButton[0]} type="button">Não lembrei</ButtonDontRemember>
                    <ButtonDontRemember color={collorsButton[1]} type="button">Quase não lembrei</ButtonDontRemember>
                    <ButtonDontRemember color={collorsButton[2]} type="button">Zap!</ButtonDontRemember>
                </ContainerButtons>
            </FooterConcluded>

        </ScreenContainer>
    )
}
const QuestionClose = styled.div
`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`
const TextQuestionClose = styled.p
`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
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
const ContainerButtons = styled.div
    `
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`
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
const ScreenContainer = styled.div
    `
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`