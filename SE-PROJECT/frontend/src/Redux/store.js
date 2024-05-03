import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
// import {
//   productDetailsReducer,
//   productListReducer,
// } from "./Reducers/ProductReducers";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./Reducers/userReducers";
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderListMyReducer,
//   orderPayReducer,
// } from "./Reducers/OrderReducers";

const reducer = combineReducers({
//   productList: productListReducer,
//   productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
//   orderCreate: orderCreateReducer,
//   orderDetails: orderDetailsReducer,
//   orderPay: orderPayReducer,
//   orderListMy: orderListMyReducer,
});

const TripsFromLocalStorage = localStorage.getItem("Trips")
  ? JSON.parse(localStorage.getItem("Trips"))
  : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    Trips: TripsFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware))
export default store;
