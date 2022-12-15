import React from "react"
import { Container, Row ,Col} from "react-bootstrap"
// import { Link } from "react-router-dom"
import {Navbar, Nav,NavLink } from "react-bootstrap"



function Page(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <div className="text-kiri">Name</div><br/>
                    <div className="text-kiri">Achmad Jamaah Firdaus</div><br/>
                    <div className="text-kiri">Muhhammad Akmal Nafis</div><br/>
                    <div className="text-kiri">Khoirur Rozikin</div><br/>
                    <div className="text-kiri">4</div><br/>
                    <div className="text-kiri">5</div><br/>
                    <div className="text-kiri">6</div><br/>
                    <div className="text-kiri">7</div><br/>
                    </Col>
                    <Col>
                    <div className="text-kanan2">NIM</div><br/>
                    <div className="text-kanan">L200200142</div><br/>
                    <div className="text-kanan">L200200149</div><br/>
                    <div className="text-kanan">L200200153</div><br/>
                    <div className="text-kanan">L200200</div><br/>
                    <div className="text-kanan">L200200</div><br/>
                    <div className="text-kanan">L200200</div><br/>
                    <div className="text-kanan">L200200</div><br/>
                    </Col>
                </Row>
            </Container>
            <div>
                <Navbar bg="yellow" className="footer">
                    <Container>
                        <Navbar.Text>Jl. Petemon IV No.32-A, RT 014/RW 008 (Gang Sebelah Bank BCA), Kel. Petemon, Kec. Sawahan, Kota Surabaya, Jawa Timur, 60252</Navbar.Text>
                        <Nav>
                            <NavLink href="https://wa.me/0851722249015">FAQs</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                {/* <Container>
                    <Row>
                        <Col className="footer">
                            <div style={{textAlign:'left'}}>
                            Jl. Petemon IV No.32-A, RT 014/RW 008 (Gang Sebelah Bank BCA), Kel. Petemon, Kec. Sawahan, Kota Surabaya, Jawa Timur, 60252
                            </div>
                        </Col>
                        <Col className="footer">
                            <div style={{textAlign:'right'}}>
                                Achmad
                            </div>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        </div>
    )
}


export default Page