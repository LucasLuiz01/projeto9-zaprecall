import styled, { StyledComponent } from "styled-components"
import HeadContainer from "./HeadContainer"
import Footer from "./footer"
import Questions from "./Questions"
import anserwsEquestions from "./AnserswEquestions"

export default function App() {
    return (
        <ScreenContainer>
          <HeadContainer/>
            {anserwsEquestions.map((q,i)=>  
            <Questions key={i} QuestionNumber={`pergunta${i+1}`} perguntas={q.perguntas} respostas={q.respostas} />
            )}
             
               
                <Footer/>
        </ScreenContainer>
    )
}

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
