import React from "react";
import InputWithLabels from "../../../shared/component/InputWithLabels";

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter E-mail Address"
      />

      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginPageInputs;
