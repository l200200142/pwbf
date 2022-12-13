import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () =>{
    return(
        <div>
            <Navbar>
                <Container>
                <Navbar.Brand>TUTOR KAK</Navbar.Brand>
                    <Nav>
                        <Nav.Link>TRENDING</Nav.Link>
                        <Nav.Link>SUPER HERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar