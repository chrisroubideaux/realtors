import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
  LISTING_DETAILS_REQUEST,
  LISTING_DETAILS_SUCCESS,
  LISTING_DETAILS_FAIL,
  LISTING_DELETE_REQUEST,
  LISTING_DELETE_SUCCESS,
  LISTING_DELETE_FAIL,
  LISTING_CREATE_REQUEST,
  LISTING_CREATE_SUCCESS,
  LISTING_CREATE_FAIL,
  LISTING_CREATE_RESET,
  LISTING_UPDATE_REQUEST,
  LISTING_UPDATE_SUCCESS,
  LISTING_UPDATE_FAIL,
  LISTING_UPDATE_RESET,
  LISTING_CREATE_REVIEW_REQUEST,
  LISTING_CREATE_REVIEW_SUCCESS,
  LISTING_CREATE_REVIEW_FAIL,
  LISTING_CREATE_REVIEW_RESET,
  LISTING_TOP_REQUEST,
  LISTING_TOP_SUCCESS,
  LISTING_TOP_FAIL,
} from '../constants/listingConstants';

export const listingListReducer = (state = { listings: [] }, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { loading: true, listing: [] };

    case LISTING_LIST_SUCCESS:
      return {
        loading: false,
        listings: action.payload.listings,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case LISTING_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listingDetailsReducer = (
  state = { listing: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case LISTING_DETAILS_REQUEST:
      return { loading: true, ...state };

    case LISTING_DETAILS_SUCCESS:
      return { loading: false, listing: action.payload };

    case LISTING_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listingDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTING_DELETE_REQUEST:
      return { loading: true };

    case LISTING_DELETE_SUCCESS:
      return { loading: false, success: true };

    case LISTING_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listingCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTING_CREATE_REQUEST:
      return { loading: true };

    case LISTING_CREATE_SUCCESS:
      return { loading: false, success: true, listing: action.payload };

    case LISTING_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case LISTING_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const listingUpdateReducer = (state = { listing: {} }, action) => {
  switch (action.type) {
    case LISTING_UPDATE_REQUEST:
      return { loading: true };

    case LISTING_UPDATE_SUCCESS:
      return { loading: false, success: true, listing: action.payload };

    case LISTING_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case LISTING_UPDATE_RESET:
      return { listing: {} };

    default:
      return state;
  }
};

export const listingReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTING_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case LISTING_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case LISTING_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case LISTING_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const listingTopRatedReducer = (state = { listings: [] }, action) => {
  switch (action.type) {
    case LISTING_TOP_REQUEST:
      return { loading: true, listings: [] };

    case LISTING_TOP_SUCCESS:
      return { loading: false, listings: action.payload };

    case LISTING_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
