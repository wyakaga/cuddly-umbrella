/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import {Row, Col, Button} from "reactstrap"
import "./App.css"
import { carts, categories } from "./static/data"

function App() {
  const groupedCarts = carts.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
  const totalPrice = carts.reduce((accumulator, item) => accumulator + (item.price * item.qty),  0);
  console.log(totalPrice)

  return (
    <div style={{overflow: "hidden"}}>
      <Navbar />
      <Row>
        <Col className="bg-light border" xs="8">
        </Col>
        <Col className="bg-light border">
          <div className="cart-container">
            <div className="category" data-testid="carts">
              <section>
                <strong>{categories[0].name}</strong>
                <div className="category-data">
                  <div style={{ width: "50%" }}>
                    {groupedCarts["Grocery"].map((data, i) => (
                      <p key={i}>{data.productName}</p>
                    ))}
                  </div>
                  <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    {groupedCarts["Grocery"].map((data, i) => (
                      <p key={i}>{`${data.price} x ${data.qty}`}</p>
                    ))}
                  </div>
                </div>
                <hr />
              </section>
              <section>
                <strong>{categories[1].name}</strong>
                <div className="category-data">
                  <div style={{ width: "50%" }}>
                    {groupedCarts["Fruit"].map((data, i) => (
                      <p key={i}>{data.productName}</p>
                    ))}
                  </div>
                  <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    {groupedCarts["Fruit"].map((data, i) => (
                      <p key={i}>{`${data.price} x ${data.qty}`}</p>
                    ))}
                  </div>
                </div>
                <hr />
              </section>
              <section>
                <strong>{categories[2].name}</strong>
                <div className="category-data">
                  <div style={{ width: "50%" }}>
                    {groupedCarts["Vegetable"].map((data, i) => (
                      <p key={i}>{data.productName}</p>
                    ))}
                  </div>
                  <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    {groupedCarts["Vegetable"].map((data, i) => (
                      <p key={i}>{`${data.price} x ${data.qty}`}</p>
                    ))}
                  </div>
                </div>
                <hr />
              </section>
            </div>
            <div>
              <strong data-testid="total">Total: IDR. {totalPrice}</strong>
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
