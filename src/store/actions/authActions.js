import * as api from "../../api";
import { openAlertMessage } from "./alertAction";
import { connectWithSocketServer } from "../../components/realtimeCommunication/socketConnection";

const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)), // <-- ADD THIS
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      connectWithSocketServer(userDetails);
      console.log("userdetail test 1 ,", userDetails);
      navigate("/dashboard");
    }
  };
};

const register = (userDetails, navigate) => {
  console.log(userDetails);
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log("andar to aara hu yaar");
    console.log("response", response);

    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
      console.log("andar aake error ", response.error);
    } else {
      console.log("response?.data ", response?.data);
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export default authActions;
