import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import {Navbar, Nav,NavLink } from "react-bootstrap"


function Daftarmenu(){
    return(
        <div>
            <Row>
                <Col>
                <div className="menu-kiri">
                    <div>Makanan:</div>   
                    <div>1. Nasi kebuli ayam rempah</div>
                    <div>2. Nasi kebuli ayam panggang</div>
                    <div>3. Nasi kebuli kambing isi 5</div>
                    <div>4. Nasi kebuli nampan isi 5</div>
                    <div>5. Nasi kebuli nampan isi 3</div><br/>
                    <div>"NOTE: Nasi kebuli nampan berisi ayam panggang / asap (bisa mix atau satu varian saja)"</div>
                </div>
                </Col>
                <Col className="harga-kiri">
                    <div>
                        <div>Price  </div>
                        <div>Rp 25.000</div>
                        <div>Rp 25.000</div>
                        <div>Rp 40.000</div>
                        <div>Rp 125.000</div>
                        <div>Rp 80.000</div>
                    </div> 
                </Col>
                <Col>
                <div className="menu-kanan">
                    <div>Minuman:</div>
                    <div>1. TEh(es/dingin)</div>
                    <div>2. TEh lemon(es/dingin)</div>
                    <div>3. Air mineral</div>
                </div>
                </Col>
                <Col>
                    <div className="harga-kanan">
                        <div>Price</div>
                        <div>Rp 5.000</div>
                        <div>Rp 6.000</div>
                        <div>Rp 3.000</div>
                    </div>
                </Col>
            </Row>
                <Navbar bg="yellow" className="footer3">
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

export default Daftarmenu