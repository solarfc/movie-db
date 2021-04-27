const AUTH = 'auth/AUTH';

const initialState = {
  auth: ''
};

const auth = (value) => {
  return {
    type: AUTH,
    payload: value
  }
};

export const localeAuth = (value) => (dispatch) => {
  dispatch(auth(value));
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH: {
      return {...state, auth: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default authReducer;