import styled, { StyledComponent } from "styled-components"
import iconeCerto from "./img/icone_certo.png"
import iconeErro from "./img/icone_erro.png"
import iconequase from "./img/icone_quase.png"
import party from "./img/party.png"
import sad from "./img/sad.png"
import setaplay from "./img/seta_play.png"
import setavirar from "./img/seta_virar.png"
import HeadContainer from "./HeadContainer"
import Footer from "./footer"

export default function App() {
    const QuestionNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <ScreenContainer>
          <HeadContainer/>
             {QuestionNumbers.map((n)=>
               <QuestionClose key={n}><TextQuestionClose> Pergunta{n} </TextQuestionClose><img src={setaplay}/></QuestionClose>
               )} 
           
                <Footer/>
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