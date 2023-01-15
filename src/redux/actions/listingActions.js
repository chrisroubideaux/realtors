import axios from 'axios';

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
  LISTING_UPDATE_REQUEST,
  LISTING_UPDATE_SUCCESS,
  LISTING_UPDATE_FAIL,
  LISTING_CREATE_REVIEW_REQUEST,
  LISTING_CREATE_REVIEW_SUCCESS,
  LISTING_CREATE_REVIEW_FAIL,
  LISTING_TOP_REQUEST,
  LISTING_TOP_SUCCESS,
  LISTING_TOP_FAIL,
} from '../constants/listingConstants';

export const listListing =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: LISTING_LIST_REQUEST });

      const { data } = await axios.get(`/api/listings${keyword}`);

      dispatch({
        type: LISTING_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LISTING_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTopListings = () => async (dispatch) => {
  try {
    dispatch({ type: LISTING_TOP_REQUEST });

    const { data } = await axios.get(`/api/listings/top/`);

    dispatch({
      type: LISTING_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LISTING_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listListingDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/listings/${id}`);

    dispatch({
      type: LISTING_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LISTING_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteListing = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LISTING_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/listings/delete/${id}/`, config);

    dispatch({
      type: LISTING_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LISTING_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createListing = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LISTING_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/listing/create/`, {}, config);
    dispatch({
      type: LISTING_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LISTING_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateListing = (listing) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LISTING_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/listings/update/${listing.id}/`,
      listing,
      config
    );
    dispatch({
      type: LISTING_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: LISTING_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LISTING_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createListingReview =
  (listingId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: LISTING_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/listing/${listingId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: LISTING_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LISTING_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
