import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import ButtonApp from "./index";



describe("<ButtonApp/>", () => {
    const mockHandler = jest.fn();
  let component;
  const buttonProps = {
    text: "Siguiente",
    title: "Nombre",
    className: "button-class",
    variant: "small",
 
  };
  beforeEach(() => {
    component = render(
      <ButtonApp
        textButton={buttonProps.text}
        titleButton={buttonProps.title}
        ClassName={buttonProps.className}
        variant={buttonProps.variant}
        onClick={mockHandler}
      />
    );
  });

  test("renders component", () => {
    expect(component.getByText(buttonProps.text)).toBeTruthy()
    expect(component.getByText(buttonProps.title)).toBeTruthy()
  });



  test("click the button call event handler once", () => {
    const button = component.getByText(buttonProps.text);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("find className and variant passed by props", () => {
    expect(
      component.container.getElementsByClassName(buttonProps.className).length
    ).toBe(1);
    expect(
      component.container.getElementsByClassName(buttonProps.variant).length
    ).toBe(1);
  });
});
