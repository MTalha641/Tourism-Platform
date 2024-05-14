// src/redux/reducers/userReducers.js

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_RESET // Import USER_DETAILS_RESET constant
} from "../Constants/UserConstants.js";

// LOGIN
export const userLoginReducer = (state = {userInfo : null}, action) => {
  switch (action.type) {
      case USER_LOGIN_REQUEST:
          return { loading: true };
      case USER_LOGIN_SUCCESS:
        console.log(action.payload.user)
          return { loading: false, userInfo: action.payload.user};
      case USER_LOGIN_FAIL:
          return { loading: false, error: action.payload };
      case USER_LOGOUT:
          return {}; // Clear userInfo when logging out
      default:
          return state;
  }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
      case USER_REGISTER_REQUEST:
          return { loading: true };
      case USER_REGISTER_SUCCESS:
          return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
          return { loading: false, error: action.payload };
      case USER_LOGOUT: // Reset user info when logging out
          return {};
      default:
          return state;
  }
  
};
