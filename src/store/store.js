// import { composeWithDevTools } from "redux-devtools-extension";
// // import { configureStore, applyMiddleware, combineReducer } from "redux";
// // import configureStore from "redux";
// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({});

// const store = configureStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// Import your reducers here
// import exampleReducer from "./exampleSlice";
import authReducer from "../store/reducers/authReducer";
import alertReducer from "../store/reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";

// Combine reducers (if you have multiple reducers)
const rootReducer = combineReducers({
  // example: exampleReducer,
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer, // Pass the combined reducers
  // Middleware is automatically set up with redux-thunk by default
  // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;
