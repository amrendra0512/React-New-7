import React, { useState } from "react";

const Contact = () => {
  const data = {
    name: "",
    email: "",
  };
  const [personalDetails, setPersonalDetails] = useState(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(personalDetails);
  };
  return (
    <div className="container">
      <form className="form form-floating" onSubmit={handleFormSubmit}>
        <div class="mb-3">
          <label htmlFor="" className="form-label">
            Enter your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="enter name"
            onChange={handleOnChange}
          />{" "}
        </div>
        <br />
        <br />
        <div class="mb-3">
          <label htmlFor="" className="form-label">
            Enter your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="enter email"
            onChange={handleOnChange}
          />{" "}
        </div>
        <br />
        <br />
        <button className="btn-light">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
