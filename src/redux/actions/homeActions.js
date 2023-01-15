import axios from 'axios';

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
  HOME_UPDATE_REQUEST,
  HOME_UPDATE_SUCCESS,
  HOME_UPDATE_FAIL,
  HOME_CREATE_REVIEW_REQUEST,
  HOME_CREATE_REVIEW_SUCCESS,
  HOME_CREATE_REVIEW_FAIL,
  HOME_TOP_REQUEST,
  HOME_TOP_SUCCESS,
  HOME_TOP_FAIL,
} from '../constants/homeConstants';

export const listHome =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: HOME_LIST_REQUEST });

      const { data } = await axios.get(`/api/homes${keyword}`);

      dispatch({
        type: HOME_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: HOME_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listTopHomes = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_TOP_REQUEST });

    const { data } = await axios.get(`/api/homes/top/`);

    dispatch({
      type: HOME_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOME_TOP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listHomeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOME_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/homes/${id}`);

    dispatch({
      type: HOME_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOME_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteHome = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/homes/delete/${id}/`, config);

    dispatch({
      type: HOME_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: HOME_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createHome = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/home/create/`, {}, config);
    dispatch({
      type: HOME_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOME_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateHome = (home) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_UPDATE_REQUEST,
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
      `/api/homes/update/${home.id}/`,
      home,
      config
    );
    dispatch({
      type: HOME_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: HOME_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOME_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createHomeReview =
  (homeId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_CREATE_REVIEW_REQUEST,
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
        `/api/homes/${homeId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: HOME_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: HOME_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
