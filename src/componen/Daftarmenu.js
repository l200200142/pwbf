import React from "react";
import { Row,Col } from "react-bootstrap";



function Daftarmenu(){
    return(
        <div>
            <Row>
                <Col>
                <div className="menu-kiri">
                    <div>Food and Beverage:</div>   
                    <div>1. Bakery</div>
                    <div>2. Cake</div>
                    <div>3. Chicken pack A</div>
                    <div>4. Chicken kebuli rice</div>
                </div>
                </Col>
                <Col className="harga-kiri">
                    <div>
                        <div>Price  </div>
                        <div>Rp 20.000</div>
                        <div>Rp 15.000</div>
                        <div>Rp 17.000</div>
                        <div>Rp 30.000</div>
                    </div> 
                </Col>
                <Col>
                <div className="menu-kanan">
                    <div>Drink:</div>
                    <div>1. Caffe</div>
                    <div>2. Chocolate</div>
                    <div>3. Tea</div>
                </div>
                </Col>
                <Col>
                    <div className="harga-kanan">
                        <div>Price</div>
                        <div>Rp 5.000</div>
                        <div>Rp 8.000</div>
                        <div>Rp 4.000</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Daftarmenu