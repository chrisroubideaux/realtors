import axios from 'axios';
import {
  AGENT_LOGIN_REQUEST,
  AGENT_LOGIN_SUCCESS,
  AGENT_LOGIN_FAIL,
  AGENT_LOGOUT,
  AGENT_REGISTER_REQUEST,
  AGENT_REGISTER_SUCCESS,
  AGENT_REGISTER_FAIL,
  AGENT_DETAILS_REQUEST,
  AGENT_DETAILS_SUCCESS,
  AGENT_DETAILS_FAIL,
  AGENT_DETAILS_RESET,
  AGENT_UPDATE_PROFILE_REQUEST,
  AGENT_UPDATE_PROFILE_SUCCESS,
  AGENT_UPDATE_PROFILE_FAIL,
  AGENT_UPDATE_PROFILE_RESET,
  AGENT_LIST_REQUEST,
  AGENT_LIST_SUCCESS,
  AGENT_LIST_FAIL,
  AGENT_LIST_RESET,
  AGENT_DELETE_REQUEST,
  AGENT_DELETE_SUCCESS,
  AGENT_DELETE_FAIL,
  AGENT_UPDATE_REQUEST,
  AGENT_UPDATE_SUCCESS,
  AGENT_UPDATE_FAIL,
} from '../constants/agentConstants';

import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: AGENT_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/agents/login/',
      { username: email, password: password },
      config
    );

    dispatch({
      type: AGENT_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('agentInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AGENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('agentInfo');
  dispatch({ type: AGENT_LOGOUT });
  dispatch({ type: AGENT_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: AGENT_LIST_RESET });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: AGENT_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/agents/register/',
      { name: name, email: email, password: password },
      config
    );

    dispatch({
      type: AGENT_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: AGENT_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('agentInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AGENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getAgentDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AGENT_DETAILS_REQUEST,
    });

    const {
      userLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/agents/${id}/`, config);

    dispatch({
      type: AGENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AGENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateAgentProfile = (agent) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AGENT_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/agents/profile/update/`,
      agent,
      config
    );

    dispatch({
      type: AGENT_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: AGENT_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('agentInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AGENT_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listAgents = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AGENT_LIST_REQUEST,
    });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/agents/`, config);

    dispatch({
      type: AGENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AGENT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteAgent = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AGENT_DELETE_REQUEST,
    });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/agents/delete/${id}/`, config);

    dispatch({
      type: AGENT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AGENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateAgent = (agent) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AGENT_UPDATE_REQUEST,
    });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/agents/update/${agent.id}/`,
      agent,
      config
    );

    dispatch({
      type: AGENT_UPDATE_SUCCESS,
    });

    dispatch({
      type: AGENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AGENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
