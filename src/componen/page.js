import React from "react"
import { Container, Row ,Col} from "react-bootstrap"


function Page(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <div className="title"></div>
                    </Col>
                </Row>
            </Container>
            <div className="footer">
                    Bendosari, Doplang, Teras, Boyolali.
            </div>
        </div>
    )
}


export default Page