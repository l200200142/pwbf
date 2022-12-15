import {Container, Row, Col} from 'react-bootstrap'
import React from 'react'
import {Navbar, Nav,NavLink } from "react-bootstrap"

const Intro = () =>{
    return(
        <div>
            <div className="intro">
                <Container>
                    <Row>
                        <Col>
                            <div className='title d-flex'> Makan gak cuman soal kenyang doang </div>
                            <div className='title d-flex '>Tapi juga harus bahagia</div>
                            <div className='title d-flex'>- Have a nice day -</div> <br/>
                        </Col>
                        <div className='title2 d-flex'>By: Restaurant React JS</div>
                    </Row>
                </Container>
            </div>
                <Navbar bg="yellow" className="footer1">
                    <Container>
                        <Navbar.Text style={{color:'black'}}>Jl. Petemon IV No.32-A, RT 014/RW 008 (Gang Sebelah Bank BCA), Kel. Petemon, Kec. Sawahan, Kota Surabaya, Jawa Timur, 60252</Navbar.Text>
                        <Nav>
                            <NavLink style={{color:'black'}} href="https://wa.me/0851722249015">WhatsApp</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Intro