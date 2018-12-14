import {
  LIST_CONTACTS_SUCCEEDED,
  LIST_CONTACTS_STARTED,
  LIST_CONTACTS_FAILED
} from './actions';

const initialState = {
  isFetching: false,
  data: null,
  error: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LIST_CONTACTS_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case LIST_CONTACTS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case LIST_CONTACTS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
