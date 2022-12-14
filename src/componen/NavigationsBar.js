import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () =>{
    return(
        <div>
            <Navbar className="border text-white " bg="white">
                <Container >
                <Navbar.Brand>Restaurant React JS</Navbar.Brand>
                    <Nav>
                        <Nav.Link>PROFIL</Nav.Link>
                        <Nav.Link>DAFTAR MENU</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar