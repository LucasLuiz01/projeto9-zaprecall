import styled from "styled-components"


const TextCorrect = styled.p
`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #2FBE34;
  text-decoration: line-through;
`
const TextWrong = styled.p
`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FF3030;
  text-decoration: line-through;
`
const TextAlmost = styled.p
`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FF922E;
  text-decoration: line-through;
`
function TextAcert (props) {  
console.log(props)
    if (props.img === "Zap!") {
        <TextCorrect></TextCorrect>
    }

    if (props.img === "Quase não lembrei") {
        
    }

    if (props.img === "Não lembrei") {
       
    }

    return   <TextCorrect></TextCorrect>
}

export { TextAcert };