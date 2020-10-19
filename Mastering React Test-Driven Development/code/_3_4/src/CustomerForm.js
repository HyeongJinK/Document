import React, { useState } from "react";

export const CustomerForm = ({
  firstName,
  lastName,
  phoneNumber,
  onSubmit,
  fetch,
}) => {
  const [customer, setCustomer] = useState({
    firstName,
    lastName,
    phoneNumber,
  });

  const handleChange = ({ target }) =>
    setCustomer((customer) => ({
      ...customer,
      [target.name]: target.value,
    }));

  const handleSubmit = () => {
    onSubmit(customer);

    fetch("/customers", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <form id="customer" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={handleChange}
      />

      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
      />

      <input type="submit" value="Add" />
    </form>
  );
};

CustomerForm.defaultProps = {
  fetch: async () => {}
};