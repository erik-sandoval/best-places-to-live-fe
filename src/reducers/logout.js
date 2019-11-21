import { LOGOUT } from "../actions/index.js";

import initialState from "./initialState";

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: {
          factors: state.user.factors,
          name: "",
          email: "",
          location: "",
          isLoggedIn: false
        }
      };
    default:
      return state;
  }
};

export default logoutReducer;
