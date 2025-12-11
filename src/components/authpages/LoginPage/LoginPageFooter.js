import React from "react";
import CustomPrimaryButton from "../../../shared/component/CustomPrimaryButton";
import RedirectInfo from "../../../shared/component/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter correct email address and password should contains between 6 and 12 characters ";
};

const getFormValidMessage = () => {};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  console.log(
    "ingo the login page footer page and printing the is Vlaid statys"
  );
  console.log("is Vlaid status ", isFormValid);
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <div>
        <RedirectInfo
          text="Need an account? "
          redirectText="Create an account"
          additionalStyles={{ marginTop: "5px" }}
          redirectHandler={handlePushToRegisterPage}
        />
      </div>
    </>
  );
};

export default LoginPageFooter;
