import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./index";
import { selectOptions } from "../../../../domains/home/application/constans/inputForms";

const selectProps = {
  title: "title select test",
  options: selectOptions,
  className: "select-test",
  error: "error",
  defaultMessage: "seleccione un item",
};
const onSelect = jest.fn();

describe("<Select/>", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Select
        title={selectProps.title}
        options={selectProps.options}
        className={selectProps.className}
        error={selectProps.error}
        defaultMessage={selectProps.defaultMessage}
        onSelectItem={onSelect}
      />
    );
  });

  test("renders component text", () => {
    component.getByText(selectProps.title);
    component.getByText(selectProps.error);
    component.getByText(selectProps.defaultMessage);
  });

  test("renders component open select options and find one item render and find className abaible when open dropdown", () => {
    const selecDiv = component.container.querySelector(".dropdown-header");
    expect(selecDiv.firstChild.textContent).toEqual(selectProps.defaultMessage);
    userEvent.click(selecDiv);
    const openSelecOption = component.container.querySelector(".dropdown-item");
    expect(component.container.getElementsByClassName("focused").length).toBe(
      2
    );
    expect(component.container.getElementsByClassName("open").length).toBe(
        2
      );
    expect(openSelecOption.firstChild.textContent).toEqual("Si");
    userEvent.click(openSelecOption);
    expect(selecDiv.firstChild.textContent).toEqual("Si");
  });

  test("handle event when click a option item", () => {
    const selecDiv = component.container.querySelector(".dropdown-header");
    userEvent.click(selecDiv);
    const openSelecOption = component.container.querySelector(".dropdown-item");
    userEvent.click(openSelecOption);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test("find classname and variant passed by props", () => {
    expect(
      component.container.getElementsByClassName(selectProps.className).length
    ).toBe(1);
  });
});

test("render default option passed by props", () => {
  const component = render(
    <Select
      title={selectProps.title}
      options={selectProps.options}
      className={selectProps.className}
      error={selectProps.error}
      defaultMessage={selectProps.defaultMessage}
      onSelectItem={onSelect}
      defaultOption={{
        id: 1,
        label: "Si",
        value: "Si",
      }}
    />
  );

  const selecDiv = component.container.querySelector(".dropdown-header");
  expect(selecDiv.firstChild.textContent).toEqual("Si");
});
