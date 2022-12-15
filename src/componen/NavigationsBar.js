import {Navbar, Container, Nav, NavLink} from "react-bootstrap"
import { Link } from "react-router-dom"
import React from "react"
// import Page from "./page"

const NavigationBar = () =>{
    return(
        <div>
            <Navbar className="bd">
                <Container >
                <Navbar.Brand>Restaurant React JS</Navbar.Brand>
                    <Nav className="tlsn">
                        <Link className="tlsn" to='/'>
                            Home
                        </Link>
                        <NavLink></NavLink>
                        <Link className="tlsn" to='page'>
                            About us
                        </Link>
                        <NavLink></NavLink>
                        <Link className="tlsn" to='daftarmenu'>
                            Daftar Menu
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar