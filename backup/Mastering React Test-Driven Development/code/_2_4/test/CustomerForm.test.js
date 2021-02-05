import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = (id) => container.querySelector(`form[id="${id}"]`);

  it("renders a form", () => {
    render(<CustomerForm />);

    expect(container.querySelector('form[id="customer"]')).not.toBeNull();
    expect(form("customer")).not.toBeNull();
  });

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };

  it("renders the first name field as a text box", () => {
    render(<CustomerForm />);

    const field = form("customer").elements.firstName;

    expect(field).not.toBeNull();
    expect(field.tagName).toEqual("INPUT");
    expect(field.type).toEqual("text");
  });

  it("includes the existing value for the first name", () => {
    render(<CustomerForm firstName="Ashley" />);
    const field = form("customer").elements.firstName;

    expect(field.value).toEqual("Ashley");
  });

  const firstNameField = () => form("customer").elements.firstName;
  it("includes the existing value for the first name", () => {
    render(<CustomerForm firstName="Ashley" />);
    expect(firstNameField().value).toEqual("Ashley");
  });

  it("renders as a text box", () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  it("renders a label for the first name field", () => {
    render(<CustomerForm />);
    expect(labelFor("firstName")).not.toBeNull();
    expect(labelFor("firstName").textContent).toEqual("First name");
  });

  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomerForm />);
    expect(firstNameField().id).toEqual("firstName");
  });

  it("saves existing first name when submitted", async () => {
    expect.hasAssertions(); // 하나의 assertion 이 발생한다고 가정한다.

    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={({ firstName }) => expect(firstName).toEqual("Jamie")}
      />
    );

    await ReactTestUtils.Simulate.change(firstNameField(), {
      target: { value: "Jamie" },
    });
    await ReactTestUtils.Simulate.submit(form("customer"));
  });

  /**
   *
   */
  const field = (name) => form("customer").elements[name];
  const itRendersAsATextBox = (fieldName) =>
    it("renders as a text box", () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });
  const itIncludesTheExistingValue = (fieldName) =>
    it("includes the existing value", () => {
      render(<CustomerForm {...{ [fieldName]: "value" }} />);
      expect(field(fieldName).value).toEqual("value");
    });
  const itSubmitsNewValue = (fieldName, value) =>
    it("saves new value when submitted", async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: "existingValue" }}
          onSubmit={(props) => expect(props[fieldName]).toEqual(value)}
        />
      );
      await ReactTestUtils.Simulate.change(field(fieldName), {
        target: { value: 'newValue', name: fieldName }
      });
      await ReactTestUtils.Simulate.submit(form("customer"));
    });
  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName");
    itSubmitsNewValue("firstName", 'newValue');
  });

  describe("last name field", () => {
    itRendersAsATextBox("lastName");
  });

  it('has a submit button', () => {
    render(<CustomerForm />);
    const submitButton = container.querySelector(
      'input[type="submit"]'
    );
    expect(submitButton).not.toBeNull();
  });
});
