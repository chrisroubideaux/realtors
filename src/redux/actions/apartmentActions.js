import axios from 'axios';

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
  APARTMENT_UPDATE_REQUEST,
  APARTMENT_UPDATE_SUCCESS,
  APARTMENT_UPDATE_FAIL,
  APARTMENT_CREATE_REVIEW_REQUEST,
  APARTMENT_CREATE_REVIEW_SUCCESS,
  APARTMENT_CREATE_REVIEW_FAIL,
  APARTMENT_TOP_REQUEST,
  APARTMENT_TOP_SUCCESS,
  APARTMENT_TOP_FAIL,
} from '../constants/apartmentConstants';

export const listApartment =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: APARTMENT_LIST_REQUEST });

      const { data } = await axios.get(`/api/apartments${keyword}`);

      dispatch({
        type: APARTMENT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APARTMENT_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTopApartments = () => async (dispatch) => {
  try {
    dispatch({ type: APARTMENT_TOP_REQUEST });

    const { data } = await axios.get(`/api/apartments/top/`);

    dispatch({
      type: APARTMENT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APARTMENT_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listApartmentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: APARTMENT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/apartments/${id}`);

    dispatch({
      type: APARTMENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APARTMENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteApartment = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APARTMENT_DELETE_REQUEST,
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

    const { data } = await axios.delete(
      `/api/apartments/delete/${id}/`,
      config
    );

    dispatch({
      type: APARTMENT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: APARTMENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createApartment = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: APARTMENT_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/apartment/create/`, {}, config);
    dispatch({
      type: APARTMENT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APARTMENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateApartment = (apartment) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APARTMENT_UPDATE_REQUEST,
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
      `/api/apartments/update/${apartment.id}/`,
      apartment,
      config
    );
    dispatch({
      type: APARTMENT_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: APARTMENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APARTMENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createApartmentReview =
  (apartmentId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: APARTMENT_CREATE_REVIEW_REQUEST,
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
        `/api/apartments/${apartmentId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: APARTMENT_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APARTMENT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
