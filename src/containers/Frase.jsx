import React, { Component } from 'react'
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { frases } from "../utils/dbFrases";

const StyledCard = styled(Jumbotron)`
    border-radius: 3px;
    position: relative;
    width: 560px;
    padding: 40px 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    background-color: #fff;
`
const StyledFrase = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    font-family: "Raleway", sans-serif;
    text-align: center;
    width: 450px;
    height: auto;
    font-weight: 500;
    font-size: 1.75em;
`

const StyledAutor = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: right;
    width: 450px;
    height: auto;
    padding-top: 20px;
    font-size: 1em;
    text-align: right;
`

const StyledButtonCita = styled(Button)`
    margin-right:5px;
`

class Frase extends Component {
    
    constructor(props) {
        super(props)
        const numAleatorio = Math.round(Math.random()*16)
        this.state = {
            color: frases[numAleatorio]["color"],
            frase: frases[numAleatorio]["frase"],
            autor: frases[numAleatorio]["autor"]
            /*
            color: "#da7fec",//paletaColor[Math.round(Math.random()*10)],
            frase: "It is never too late to be what you might have been.",
            autor: "- George Eliot"
            */
        }
    }

    render() {
        return (
            <div style={{
                backgroundColor: `${this.state.color}`, padding: "15%",
                height: "100%"
            }}>
                <StyledCard fluid style={{ color: `${this.state.color}` }}>
                    <Container>
                        <StyledFrase>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
                            <span>
                                {this.state.frase}
                            </span>
                        </StyledFrase>
                        <StyledAutor>
                            {this.state.autor}
                        </StyledAutor>
                        <Row style={{ marginTop: "30px" }}>
                            <Col>
                                <StyledButtonCita style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </StyledButtonCita>
                                <StyledButtonCita style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </StyledButtonCita>
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                <StyledButtonCita style={{ backgroundColor: `${this.state.color}`, borderColor: `${this.state.color}` }}>New quote</StyledButtonCita>
                            </Col>
                        </Row>
                    </Container>
                </StyledCard>
            </div>
        )
    }
}

export default Frase