import React from "react";
import InputWithLabels from "../../../shared/component/InputWithLabels";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      {/* label for mail id */}
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail Address"
        type="text"
        placeholder="Enter e-mail address"
      />

      {/* label for username */}
      <InputWithLabels
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter Username"
      />

      {/* lable for password */}
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
