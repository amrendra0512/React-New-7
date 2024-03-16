import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value); // the value is getting like this using useRef
  };
  return (
    <>
    <h4>UnControlled Components</h4>
    <form onSubmit={handleSubmit}>
      <input type="email" name="" id="em" ref={emailRef} /> <br />
      <br />
      <input type="password" name="" id="pwd" ref={passwordRef} /> <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Uncontrolled;
