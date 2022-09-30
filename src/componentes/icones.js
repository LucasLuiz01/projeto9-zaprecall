import styled from "styled-components"
import React from "react"

import iconeCerto from "../img/icone_certo.png"
import iconeErro from "../img/icone_erro.png"
import iconeQuase from "../img/icone_quase.png"
import setaplay from "../img/seta_play.png"
import setavirar from "../img/seta_virar.png"

const Image = styled.img
`
width: 20px;
`

const ImageOpen = styled.img
`
position: absolute;
bottom: 10px;
right: 10px;
`
const TextQuestionClose = styled.p
`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: blue;
`

function Icon(props) {

    let icon = ""

    if (props.img === "virar") {
        return <ImageOpen src={setavirar} onClick={props.onClick} />
    }

    if (props.img === "play") {
        icon = setaplay
    }    

    if (props.img === "Zap!") {
        icon = iconeCerto
    }

    if (props.img === "Quase não lembrei") {
        icon = iconeQuase
    }

    if (props.img === "Não lembrei") {
        icon = iconeErro
    }

    return (
    <Image src={icon} onClick={props.onClick} />
    )
}

export { Icon };