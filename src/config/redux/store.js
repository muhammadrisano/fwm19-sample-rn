import {createStore} from 'redux';

const initialState = {
  name: 'risano',
  count: 0,
};
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

const store = createStore(rootReducer);

export default store;