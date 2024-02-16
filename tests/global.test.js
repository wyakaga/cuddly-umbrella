/** @jest-environment jsdom */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppComponent from '../src/App.jsx';
import {carts} from "../src/static/data"

const totalValue = carts.reduce((accumulator, item) => {
  const { price, qty } = item;
  return accumulator + price * qty;
}, 0);
const randomCart = Math.floor(Math.random() * carts.length);

describe('App', () => {
  it('Render navbar app title should show text "Toklontong"', () => {
    render(<AppComponent />);
    const element = screen.getByTestId("app-title")
    expect(element).toHaveTextContent("Toklontong");
  });

  it(`Render list cart item should have strong element`, () => {
    render(<AppComponent />);
    const element = screen.getByTestId("carts")
    const strongElement = element.querySelector('strong');
    expect(strongElement).toBeInTheDocument();
  });

  it(`Render list cart item should have product name ${carts[randomCart].productName}`, () => {
    render(<AppComponent />);
    const element = screen.getByTestId("carts")
    expect(element).toHaveTextContent(`${carts[randomCart].productName}`);
  });

  it(`Total rendering should be "Total: IDR. ${totalValue}"`, () => {
    render(<AppComponent />);
    const element = screen.getByTestId("total")
    expect(element).toHaveTextContent(`Total: IDR. ${totalValue}`);
  });

});