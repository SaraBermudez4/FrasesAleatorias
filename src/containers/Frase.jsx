import React, { Component } from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { frases } from "../utils/dbFrases";

const StyledCard = styled(Jumbotron)`
    border-radius: 3px;
    position: relative;
    width: 650px;
    padding: 40px 50px;
    background-color: #fff;
    top: 50%;
    left: 50%; 
    margin-top: -200px; 
    margin-left: -300px; 
    @media (min-width: 320px) and (max-width: 480px) {
        top: 35%;
        left: 100%;
        width: auto;
    }
`
const StyledFrase = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    font-family: "Raleway", sans-serif;
    text-align: center;
    height: auto;
    font-weight: 500;
    font-size: 1.75em;
`

const StyledAutor = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: right;
    height: auto;
    padding-top: 20px;
    font-size: 1em;
    text-align: right;
`

const StyledButtonCita = styled.a`
    margin-right:5px;
    color:white;
    &:hover{
        color:white;
        box-shadow: inset 0px 0px 10px 0px #ffffff;
    }
`

const StyledContainer = styled(Container)`
    padding: 25% 50% 25%;
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 70% 15% 100% 75%;
    }

`

class Frase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: "",
            frase: "",
            autor: ""
        }
    }

    cambiarFrase = () => {
        const numAleatorio = Math.round(Math.random() * 53)
        this.setState({
            color: frases[numAleatorio]["color"],
            frase: frases[numAleatorio]["frase"],
            autor: frases[numAleatorio]["autor"]
        })
    }
    componentDidMount() {
        this.cambiarFrase()
    }

    render() {
        return (
            <StyledContainer style={{
                backgroundColor: `${this.state.color}`
            }}>
                <StyledCard fluid style={{ color: `${this.state.color}` }} id="quote-box">
                    <Container>
                        <StyledFrase id="text">
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
                            <span>
                                {this.state.frase}
                            </span>
                        </StyledFrase>
                        <StyledAutor id="author">
                            {this.state.autor}
                        </StyledAutor>
                        <Row style={{ marginTop: "30px" }}>
                            <Col>
                                <StyledButtonCita className="btn" style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }} href={`https://api.whatsapp.com/send?text="${this.state.frase}${this.state.autor}"#quotes`} target="_blanck">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </StyledButtonCita>
                                <StyledButtonCita className="btn" id="tweet-quote" style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }} href={`https://twitter.com/intent/tweet/?text="${this.state.frase}${this.state.autor}"&hashtags=VidaProgramador`} target="_blanck">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </StyledButtonCita>
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                <StyledButtonCita className="btn" id="new-quote" style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }}
                                    onClick={this.cambiarFrase}>New quote</StyledButtonCita>
                            </Col>
                        </Row>
                    </Container>
                </StyledCard>
            </StyledContainer>
        )
    }
}

export default Frase