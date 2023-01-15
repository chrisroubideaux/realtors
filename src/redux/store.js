import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  apartmentListReducer,
  apartmentDetailsReducer,
  apartmentDeleteReducer,
  apartmentCreateReducer,
  apartmentUpdateReducer,
  apartmentReviewCreateReducer,
  apartmentTopRatedReducer,
} from './reducers/apartmentReducers';

import {
  condoListReducer,
  condoDetailsReducer,
  condoDeleteReducer,
  condoCreateReducer,
  condoUpdateReducer,
  condoReviewCreateReducer,
  condoTopRatedReducer,
} from './reducers/condoReducers';

import {
  homeListReducer,
  homeDetailsReducer,
  homeDeleteReducer,
  homeCreateReducer,
  homeUpdateReducer,
  homeReviewCreateReducer,
  homeTopRatedReducer,
} from './reducers/homeReducers';

import {
  listingListReducer,
  listingDetailsReducer,
  listingDeleteReducer,
  listingCreateReducer,
  listingUpdateReducer,
  listingReviewCreateReducer,
  listingTopRatedReducer,
} from './reducers/listingReducers';

import {
  propertyListReducer,
  propertyDetailsReducer,
  propertyDeleteReducer,
  propertyCreateReducer,
  propertyUpdateReducer,
  propertyReviewCreateReducer,
  propertyTopRatedReducer,
} from './reducers/propertyReducers';

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';

import {
  agentLoginReducer,
  agentRegisterReducer,
  agentDetailsReducer,
  agentUpdateProfileReducer,
  agentListReducer,
  agentDeleteReducer,
  agentUpdateReducer,
} from './reducers/agentReducers';

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
  apartmentList: apartmentListReducer,
  apartmentDetails: apartmentDetailsReducer,
  apartmentDelete: apartmentDeleteReducer,
  apartmentCreate: apartmentCreateReducer,
  apartmentUpdate: apartmentUpdateReducer,
  aparmentReviewCreate: apartmentReviewCreateReducer,
  apartmentTopRated: apartmentTopRatedReducer,

  condoList: condoListReducer,
  condoDetails: condoDetailsReducer,
  condoDelete: condoDeleteReducer,
  condoCreate: condoCreateReducer,
  condoUpdate: condoUpdateReducer,
  condoReviewCreate: condoReviewCreateReducer,
  condoTopRated: condoTopRatedReducer,

  homeList: homeListReducer,
  homeDetails: homeDetailsReducer,
  homeDelete: homeDeleteReducer,
  homeCreate: homeCreateReducer,
  homeUpdate: homeUpdateReducer,
  homeReviewCreate: homeReviewCreateReducer,
  homeTopRated: homeTopRatedReducer,

  listingList: listingListReducer,
  listingDetails: listingDetailsReducer,
  listingDelete: listingDeleteReducer,
  listingCreate: listingCreateReducer,
  listingUpdate: listingUpdateReducer,
  listingReviewCreate: listingReviewCreateReducer,
  listingTopRated: listingTopRatedReducer,

  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  propertyDelete: propertyDeleteReducer,
  propertyCreate: propertyCreateReducer,
  propertyUpdate: propertyUpdateReducer,
  propertyReviewCreate: propertyReviewCreateReducer,
  propertyTopRated: propertyTopRatedReducer,

  agentLogin: agentLoginReducer,
  agentRegister: agentRegisterReducer,
  agentDetails: agentDetailsReducer,
  agentUpdateProfile: agentUpdateProfileReducer,
  agentList: agentListReducer,
  agentDelete: agentDeleteReducer,
  agentUpdate: agentUpdateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,

  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
