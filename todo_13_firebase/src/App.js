import React from "react";
import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const App = () => {
  const auth = getAuth(app);

  const signUpuser = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        "amrendra.kumar3222456@gmail.com",
        "a@12356#"
      );
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <button onClick={()=>signUpuser()}>Create Button</button>
    </div>
  );
};

export default App;
