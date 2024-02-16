/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import {Row, Col, Button} from "reactstrap"
import "./App.css"
import { carts, categories } from "./static/data"

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <Navbar />
      <Row>
        <Col className="bg-light border" xs="8">
        </Col>
        <Col className="bg-light border">
          <div className="cart-container">
            <div>
              <strong data-testid="total">Total: IDR.</strong>
            </div>
            <div className="checkout-action">
                <Button
                  color="primary"
                  size="lg"
                  className="btn-checkout"
                >
                  Checkout
                </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
