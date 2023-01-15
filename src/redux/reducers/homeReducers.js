import {
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
  HOME_LIST_FAIL,
  HOME_DETAILS_REQUEST,
  HOME_DETAILS_SUCCESS,
  HOME_DETAILS_FAIL,
  HOME_DELETE_REQUEST,
  HOME_DELETE_SUCCESS,
  HOME_DELETE_FAIL,
  HOME_CREATE_REQUEST,
  HOME_CREATE_SUCCESS,
  HOME_CREATE_FAIL,
  HOME_CREATE_RESET,
  HOME_UPDATE_REQUEST,
  HOME_UPDATE_SUCCESS,
  HOME_UPDATE_FAIL,
  HOME_UPDATE_RESET,
  HOME_CREATE_REVIEW_REQUEST,
  HOME_CREATE_REVIEW_SUCCESS,
  HOME_CREATE_REVIEW_FAIL,
  HOME_CREATE_REVIEW_RESET,
  HOME_TOP_REQUEST,
  HOME_TOP_SUCCESS,
  HOME_TOP_FAIL,
} from '../constants/homeConstants';

export const homeListReducer = (state = { homes: [] }, action) => {
  switch (action.type) {
    case HOME_LIST_REQUEST:
      return { loading: true, home: [] };

    case HOME_LIST_SUCCESS:
      return {
        loading: false,
        homes: action.payload.homes,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case HOME_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const homeDetailsReducer = (
  state = { home: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case HOME_DETAILS_REQUEST:
      return { loading: true, ...state };

    case HOME_DETAILS_SUCCESS:
      return { loading: false, home: action.payload };

    case HOME_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const homeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_DELETE_REQUEST:
      return { loading: true };

    case HOME_DELETE_SUCCESS:
      return { loading: false, success: true };

    case HOME_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const homeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_CREATE_REQUEST:
      return { loading: true };

    case HOME_CREATE_SUCCESS:
      return { loading: false, success: true, home: action.payload };

    case HOME_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case HOME_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const homeUpdateReducer = (state = { home: {} }, action) => {
  switch (action.type) {
    case HOME_UPDATE_REQUEST:
      return { loading: true };

    case HOME_UPDATE_SUCCESS:
      return { loading: false, success: true, home: action.payload };

    case HOME_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case HOME_UPDATE_RESET:
      return { home: {} };

    default:
      return state;
  }
};

export const homeReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case HOME_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case HOME_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case HOME_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const homeTopRatedReducer = (state = { homes: [] }, action) => {
  switch (action.type) {
    case HOME_TOP_REQUEST:
      return { loading: true, homes: [] };

    case HOME_TOP_SUCCESS:
      return { loading: false, homes: action.payload };

    case HOME_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
