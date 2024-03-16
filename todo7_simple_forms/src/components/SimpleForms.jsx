import React, { useState } from "react";
import "./SimpleForms.css";

const SimpleForms = () => {
  const initialpersonalData = {
    name: "",
    email: "",
    password: "",
  };
  const [personalDetails, setPersonalDetails] = useState(initialpersonalData);

  const [personalDetailsErrors, setPersonalDetailsErrors] =
    useState(initialpersonalData);

  const [personaDetailsBlur, setPersonaDetailsBlur] =
    useState(initialpersonalData);

  const onBlurHandler = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length == 0) {
      setPersonaDetailsBlur({ ...personaDetailsBlur, name: "enter name " });
    }
    if (name === "name" && value.length > 0) {
      setPersonaDetailsBlur({ ...personaDetailsBlur, name: "" });
    }

    if (name === "password" && value.length == 0) {
      setPersonaDetailsBlur({
        ...personaDetailsBlur,
        password: "enter password ",
      });
    }
    if (name === "password" && value.length > 0) {
      setPersonaDetailsBlur({ ...personaDetailsBlur, password: "" });
    }

    if (name === "email" && value.length == 0) {
      setPersonaDetailsBlur({ ...personaDetailsBlur, email: "enter email " });
    }
    if (name === "email" && value.length > 0) {
      setPersonaDetailsBlur({ ...personaDetailsBlur, email: "" });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });

    if (name === "password" && value.length < 6) {
      setPersonalDetailsErrors({
        ...personalDetailsErrors,
        password: "Please enter minimum 6 character",
      });
    }

    if (name === "password" && value.length >= 6) {
      setPersonalDetailsErrors({
        ...personalDetailsErrors,
        password: "",
      });
    }

    if (name === "name" && value.length == 0) {
      setPersonalDetailsErrors({
        ...personalDetailsErrors,
        name: "Please enter name",
      });
    }

    if (name === "name" && value.length > 0) {
      setPersonalDetailsErrors({
        ...personalDetailsErrors,
        name: "",
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h4>Contact Details </h4>
      <form onSubmit={onSubmitHandler} method="post" action="">
        <label>Name</label> {""}
        <input
          type="text"
          name="name"
          placeholder="Please enter name"
          id="username"
          value={personalDetails.name}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <br />
        {personalDetailsErrors.name && (
          <span className="form-errors">{personalDetailsErrors.name}</span>
        )}
        {personaDetailsBlur.name && (
          <span className="form-errors">{personaDetailsBlur.name}</span>
        )}
        <br />
        <label>Email</label> {""}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Please enter email"
          onBlur={onBlurHandler}
          value={personalDetails.email}
          onChange={onChangeHandler}
        />{" "}
        <br />
        {personalDetailsErrors.email && (
          <span className="form-errors">{personalDetailsErrors.email}</span>
        )}
        {personaDetailsBlur.email && (
          <span className="form-errors">{personaDetailsBlur.email}</span>
        )}
        <br />
        <label>Password</label> {""}
        <input
          type="password"
          name="password"
          placeholder="Please enter password"
          id="password"
          value={personalDetails.password}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />{" "}
        <br />
        {personalDetailsErrors.password && (
          <span className="form-errors">{personalDetailsErrors.password}</span>
        )}
        {personaDetailsBlur.password && (
          <span className="form-errors">{personaDetailsBlur.password}</span>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForms;
