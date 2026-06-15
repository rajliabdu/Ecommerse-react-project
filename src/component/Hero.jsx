
import React from 'react'
import { Container, Row, Col,Button } from "react-bootstrap";

const Hero = () => {
  
  return (
    <Container fluid className="border border-secondary p-0">
      <Row className="align-items-center g-0">
        {/* Left Side */}
        <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center py-5 py-sm-0">
          <div className="text-dark">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div style={{ width: "40px", height: "2px", backgroundColor: "#414141" }}></div>
              <p className="mb-0 fw-medium text-uppercase small">OUR BESTSELLERS</p>
            </div>

            <h1 className="display-5 fw-normal lh-base mb-3">
              Latest Arrivals
            </h1>

            <div className="d-flex align-items-center gap-2">
              <p className="mb-0 fw-semibold small text-uppercase">SHOP NOW</p>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#414141" }}></div>
            </div>
          </div>
        </Col>

        {/* Right Side */}
        <Col xs={12} sm={6}>
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            
            className="img-fluid  w-100 " alt="Model"
          />
        </Col>
      </Row>
    </Container>

  )
}

export default Hero