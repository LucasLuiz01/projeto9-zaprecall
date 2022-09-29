import styled, { StyledComponent } from "styled-components"
import HeadContainer from "./HeadContainer"
import Footer from "./footer"
import Questions from "./Questions"
import anserwsEquestions from "./AnserswEquestions"
import React from "react"

export default function Container() {
    const [currentQuestion, setCurrentQuestion] = React.useState(-1);
    const [closedQuestions, setClosedQuestions] = React.useState(new Array(anserwsEquestions.length));

    function closeQuestion(option) {
        if (currentQuestion === -1) {
            return;
        }
        
        const newClosedQuestions = [...closedQuestions];
        newClosedQuestions[currentQuestion] = option;
        setClosedQuestions([...newClosedQuestions]);
    }

    return (
        <ScreenContainer>
          <HeadContainer/>
            {anserwsEquestions.map((q,i)=>  
            <Questions 
            id={i} key={i} 
            QuestionNumber={`pergunta${i+1}`} 
            perguntas={q.perguntas} 
            respostas={q.respostas}
            onClick={() => setCurrentQuestion(i)}
            isClosed={closedQuestions[i]}
            />
            )}
                <Footer onClick={closeQuestion}/>
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
const image = styled.img
`
width: 20px;
`