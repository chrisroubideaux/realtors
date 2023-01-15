import {
  APARTMENT_LIST_REQUEST,
  APARTMENT_LIST_SUCCESS,
  APARTMENT_LIST_FAIL,
  APARTMENT_DETAILS_REQUEST,
  APARTMENT_DETAILS_SUCCESS,
  APARTMENT_DETAILS_FAIL,
  APARTMENT_DELETE_REQUEST,
  APARTMENT_DELETE_SUCCESS,
  APARTMENT_DELETE_FAIL,
  APARTMENT_CREATE_REQUEST,
  APARTMENT_CREATE_SUCCESS,
  APARTMENT_CREATE_FAIL,
  APARTMENT_CREATE_RESET,
  APARTMENT_UPDATE_REQUEST,
  APARTMENT_UPDATE_SUCCESS,
  APARTMENT_UPDATE_FAIL,
  APARTMENT_UPDATE_RESET,
  APARTMENT_CREATE_REVIEW_REQUEST,
  APARTMENT_CREATE_REVIEW_SUCCESS,
  APARTMENT_CREATE_REVIEW_FAIL,
  APARTMENT_CREATE_REVIEW_RESET,
  APARTMENT_TOP_REQUEST,
  APARTMENT_TOP_SUCCESS,
  APARTMENT_TOP_FAIL,
} from '../constants/apartmentConstants';

export const apartmentListReducer = (state = { apartments: [] }, action) => {
  switch (action.type) {
    case APARTMENT_LIST_REQUEST:
      return { loading: true, apartment: [] };

    case APARTMENT_LIST_SUCCESS:
      return {
        loading: false,
        apartments: action.payload.apartments,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case APARTMENT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const apartmentDetailsReducer = (
  state = { apartment: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case APARTMENT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case APARTMENT_DETAILS_SUCCESS:
      return { loading: false, apartment: action.payload };

    case APARTMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const apartmentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case APARTMENT_DELETE_REQUEST:
      return { loading: true };

    case APARTMENT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case APARTMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const apartmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APARTMENT_CREATE_REQUEST:
      return { loading: true };

    case APARTMENT_CREATE_SUCCESS:
      return { loading: false, success: true, apartment: action.payload };

    case APARTMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case APARTMENT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const apartmentUpdateReducer = (state = { apartment: {} }, action) => {
  switch (action.type) {
    case APARTMENT_UPDATE_REQUEST:
      return { loading: true };

    case APARTMENT_UPDATE_SUCCESS:
      return { loading: false, success: true, apartment: action.payload };

    case APARTMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case APARTMENT_UPDATE_RESET:
      return { apartment: {} };

    default:
      return state;
  }
};

export const apartmentReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APARTMENT_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case APARTMENT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case APARTMENT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case APARTMENT_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const apartmentTopRatedReducer = (
  state = { apartments: [] },
  action
) => {
  switch (action.type) {
    case APARTMENT_TOP_REQUEST:
      return { loading: true, apartments: [] };

    case APARTMENT_TOP_SUCCESS:
      return { loading: false, apartments: action.payload };

    case APARTMENT_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
