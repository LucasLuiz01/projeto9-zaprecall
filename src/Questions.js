import setaplay from "./img/seta_play.png"
import styled from "styled-components"
import React from "react"
import iconeCerto from "./img/icone_certo.png"
import iconeErro from "./img/icone_erro.png"
import iconequase from "./img/icone_quase.png"
import party from "./img/party.png"
import sad from "./img/sad.png"
import setavirar from "./img/seta_virar.png"
export default function Questions ({QuestionNumber, perguntas, respostas}){
    const [textCard, setTextCard] = React.useState(QuestionNumber)
    const [DivCard, setDiv] = React.useState(QuestionClose)
    const [imageCard, setImageCard] = React.useState(setaplay)
    const [ConfigCard, setConfigCard] = React.useState(image)
    let changeText = ""
    function ChosenQuestion(){
        if(textCard === QuestionNumber){
             changeText = perguntas
            setTextCard(changeText)
            setDiv(QuestionOpen)
            setImageCard(setavirar)
            setConfigCard(imageOpen)
        }
        if(textCard === perguntas){
            changeText = respostas
            setTextCard(respostas)
            setImageCard()
        }
    }
   return( <DivCard>
        <TextQuestionClose> {textCard} </TextQuestionClose>
        <ConfigCard src={imageCard} onClick={ChosenQuestion}/>
        </DivCard>
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
const QuestionOpen = styled.div
`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
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
const image = styled.img
`
width: 20px;
`
const imageOpen = styled.img
`
position: absolute;
bottom: 10px;
right: 10px;
`