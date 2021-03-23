import {DATA_REQUEST, DATA_REQUEST_SUCCESS, DATA_REQUEST_FAIL} from './Types';

//REDUCER
export const newsDataReducer = (state = [], action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        loading: true,
      };
    case DATA_REQUEST_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };

    case DATA_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
