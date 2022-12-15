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
                    <div className="text-about">Restaurant React JS</div><br/>
                    <div className="text-about">
                       "Kami merupakan Restaurant khas nasi kebuli premium yang sudah berdiri sejak tahun 1976.
                       Didirikan oleh ibu X yang diwariskan hingga anak cucu, kini telah dipegang oleh ibu Y sebagai pewaris sah generasi ke 2.
                       Saat ini kami telah memiliki 7 cabang yang tersebar di berbagai penjuru Indonesia dan akan terus berkembang nanti nya"
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="text-about">
                        Open: 
                    </div><br/>
                    <div className="text-open">Every day, 08:00 AM ~ 22:00 PM</div><br/>
                    <div className="text-open">Friday, 01:00 PM ~ 22:00 PM</div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Navbar bg="yellow" className="footer">
                    <Container>
                        <Navbar.Text style={{color:'black'}}>Jl. Petemon IV No.32-A, RT 014/RW 008 (Gang Sebelah Bank BCA), Kel. Petemon, Kec. Sawahan, Kota Surabaya, Jawa Timur, 60252</Navbar.Text>
                        <Nav>
                        <NavLink style={{color:'black'}} href="https://wa.me/0851722249015">WhatsApp</NavLink>
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