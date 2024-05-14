import axios from 'axios';
import {
  USER_DETAILS_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  SET_USER_ROLE
} from '../Constants/UserConstants.js';

export const login = (email, password,role) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8081/api/users/login`,
      { email, password,role },
      config
    );

    console.log("Token:", data.token,data.user); // Log the token

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("token", data.token); // Save token to local storage
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token"); // Remove token from local storage
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET }); // Reset user details
};

export const register = (name, email, password, ph_num, address, city,role) => async (dispatch) => {
  try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
      const { data } = await axios.post(
          `http://localhost:8081/api/users/register`,
          { name, email, password, ph_num, address, city,role },
          config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", data.token); // Save token to local storage
  } catch (error) {
      console.log(error);
      dispatch({
          type: USER_REGISTER_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      });
  }

  // export const register = (name, email, password, ph_num, address, city, role) => async (dispatch) => {
  //   try {
  //     dispatch({ type: USER_REGISTER_REQUEST });
  
  //     // Make API call to register
  //     const { data } = await axios.post('/api/users/register', { name, email, password, ph_num, address, city, role });
  
  //     dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  //     dispatch({ type: SET_USER_ROLE, payload: role }); // Set user role in Redux store
  //     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //   } catch (error) {
  //     dispatch({
  //       type: USER_REGISTER_FAIL,
  //       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
  //     });
  //   }
  // };
};
