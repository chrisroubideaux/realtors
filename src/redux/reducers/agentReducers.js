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
  AGENT_UPDATE_RESET,
} from '../constants/agentConstants';

export const agentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case AGENT_LOGIN_REQUEST:
      return { loading: true };

    case AGENT_LOGIN_SUCCESS:
      return { loading: false, agentInfo: action.payload };

    case AGENT_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const agentRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case AGENT_REGISTER_REQUEST:
      return { loading: true };

    case AGENT_REGISTER_SUCCESS:
      return { loading: false, agentInfo: action.payload };

    case AGENT_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const agentDetailsReducer = (state = { agent: {} }, action) => {
  switch (action.type) {
    case AGENT_DETAILS_REQUEST:
      return { ...state, loading: true };

    case AGENT_DETAILS_SUCCESS:
      return { loading: false, agent: action.payload };

    case AGENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_DETAILS_RESET:
      return { agent: {} };

    default:
      return state;
  }
};

export const agentUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case AGENT_UPDATE_PROFILE_REQUEST:
      return { loading: true };

    case AGENT_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, agentInfo: action.payload };

    case AGENT_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_UPDATE_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};

export const agentListReducer = (state = { agents: [] }, action) => {
  switch (action.type) {
    case AGENT_LIST_REQUEST:
      return { loading: true };

    case AGENT_LIST_SUCCESS:
      return { loading: false, agents: action.payload };

    case AGENT_LIST_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_LIST_RESET:
      return { agents: [] };

    default:
      return state;
  }
};

export const agentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case AGENT_DELETE_REQUEST:
      return { loading: true };

    case AGENT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case AGENT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const agentUpdateReducer = (state = { agent: {} }, action) => {
  switch (action.type) {
    case AGENT_UPDATE_REQUEST:
      return { loading: true };

    case AGENT_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case AGENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case AGENT_UPDATE_RESET:
      return { agent: {} };

    default:
      return state;
  }
};
