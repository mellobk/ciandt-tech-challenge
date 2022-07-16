import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {  fireEvent, render } from "@testing-library/react";
import  InputApp from "./index";
import { currencyCopFormat } from "../../../application/helpers/common-functions";



describe("<InputApp/>", () => {

  let component;
  const onSearchMock = jest.fn();
  const inputProps = {

    title: "Nombre",
    className: "button-class",
    variant: "small",
    error:"error",
    placeholder: "placeholder render"
  };

  beforeEach(() => {
    component = render(
      <InputApp
        title={inputProps.title}
        className={inputProps.className}
        variant={inputProps.variant}
        error={inputProps.error}
        placeholder={inputProps.placeholder}
        onChange={onSearchMock}
      
      />
    );
  });

  test("renders component", () => {
    expect(component.getByText(inputProps.title)).toBeTruthy()
    expect(component.getByText(inputProps.error)).toBeTruthy()
  });

  test("renders component by placeholder", () => {
    component.getByPlaceholderText(inputProps.placeholder);

  });

  test('It should render value in input', () => {
    const input = component.container.querySelector(`.${inputProps.className}`);
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('23')
  })

  test('It should keep a $ in front of the input', () => {
    const input = component.container.querySelector(`.${inputProps.className}`);
    fireEvent.change(input, {target: {value: currencyCopFormat('23')}})
    expect(input.value).toBe('$23')
  })

  test('It should keep a . in front of the input every 3 number', () => {
    const input = component.container.querySelector(`.${inputProps.className}`);
    fireEvent.change(input, {target: {value: currencyCopFormat('230000')}})
    expect(input.value).toBe('$230.000')
  })

  test('expect text on input', () => {
    const input = component.container.querySelector(`.${inputProps.className}`);
    fireEvent.change(input, {target: {value: 'number'}})
    expect(input.value).toBe('number')
  })

  test("find className and variant passed by props", () => {
    expect(
      component.container.getElementsByClassName(inputProps.className).length
    ).toBe(1);
    expect(
      component.container.getElementsByClassName(inputProps.variant).length
    ).toBe(1);
  });


});
