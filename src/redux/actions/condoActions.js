import axios from 'axios';

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
  CONDO_UPDATE_REQUEST,
  CONDO_UPDATE_SUCCESS,
  CONDO_UPDATE_FAIL,
  CONDO_CREATE_REVIEW_REQUEST,
  CONDO_CREATE_REVIEW_SUCCESS,
  CONDO_CREATE_REVIEW_FAIL,
  CONDO_TOP_REQUEST,
  CONDO_TOP_SUCCESS,
  CONDO_TOP_FAIL,
} from '../constants/condoConstants';

export const listCondo =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: CONDO_LIST_REQUEST });

      const { data } = await axios.get(`/api/condos${keyword}`);

      dispatch({
        type: CONDO_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONDO_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTopCondos = () => async (dispatch) => {
  try {
    dispatch({ type: CONDO_TOP_REQUEST });

    const { data } = await axios.get(`/api/condos/top/`);

    dispatch({
      type: CONDO_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONDO_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listCondosDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONDO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/condos/${id}`);

    dispatch({
      type: CONDO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONDO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteCondo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONDO_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/condos/delete/${id}/`, config);

    dispatch({
      type: CONDO_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CONDO_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createCondo = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONDO_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/condo/create/`, {}, config);
    dispatch({
      type: CONDO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONDO_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateCondo = (condo) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONDO_UPDATE_REQUEST,
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
      `/api/condos/update/${condo.id}/`,
      condo,
      config
    );
    dispatch({
      type: CONDO_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: CONDO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONDO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createCondoReview =
  (condoId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONDO_CREATE_REVIEW_REQUEST,
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
        `/api/condos/${condoId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: CONDO_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONDO_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
