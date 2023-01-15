import {
  CONDO_LIST_REQUEST,
  CONDO_LIST_SUCCESS,
  CONDO_LIST_FAIL,
  CONDO_DETAILS_REQUEST,
  CONDO_DETAILS_SUCCESS,
  CONDO_DETAILS_FAIL,
  CONDO_DELETE_REQUEST,
  CONDO_DELETE_SUCCESS,
  CONDO_DELETE_FAIL,
  CONDO_CREATE_REQUEST,
  CONDO_CREATE_SUCCESS,
  CONDO_CREATE_FAIL,
  CONDO_CREATE_RESET,
  CONDO_UPDATE_REQUEST,
  CONDO_UPDATE_SUCCESS,
  CONDO_UPDATE_FAIL,
  CONDO_UPDATE_RESET,
  CONDO_CREATE_REVIEW_REQUEST,
  CONDO_CREATE_REVIEW_SUCCESS,
  CONDO_CREATE_REVIEW_FAIL,
  CONDO_CREATE_REVIEW_RESET,
  CONDO_TOP_REQUEST,
  CONDO_TOP_SUCCESS,
  CONDO_TOP_FAIL,
} from '../constants/condoConstants';

export const condoListReducer = (state = { condos: [] }, action) => {
  switch (action.type) {
    case CONDO_LIST_REQUEST:
      return { loading: true, condo: [] };

    case CONDO_LIST_SUCCESS:
      return {
        loading: false,
        condos: action.payload.condos,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case CONDO_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const condoDetailsReducer = (
  state = { condo: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CONDO_DETAILS_REQUEST:
      return { loading: true, ...state };

    case CONDO_DETAILS_SUCCESS:
      return { loading: false, condo: action.payload };

    case CONDO_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const apartmentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONDO_DELETE_REQUEST:
      return { loading: true };

    case CONDO_DELETE_SUCCESS:
      return { loading: false, success: true };

    case CONDO_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const condoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CONDO_CREATE_REQUEST:
      return { loading: true };

    case CONDO_CREATE_SUCCESS:
      return { loading: false, success: true, condo: action.payload };

    case CONDO_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case CONDO_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const condoUpdateReducer = (state = { condo: {} }, action) => {
  switch (action.type) {
    case CONDO_UPDATE_REQUEST:
      return { loading: true };

    case CONDO_UPDATE_SUCCESS:
      return { loading: false, success: true, condo: action.payload };

    case CONDO_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case CONDO_UPDATE_RESET:
      return { condo: {} };

    default:
      return state;
  }
};

export const condoReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CONDO_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case CONDO_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case CONDO_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case CONDO_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const condoTopRatedReducer = (state = { condos: [] }, action) => {
  switch (action.type) {
    case CONDO_TOP_REQUEST:
      return { loading: true, condos: [] };

    case CONDO_TOP_SUCCESS:
      return { loading: false, condos: action.payload };

    case CONDO_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
