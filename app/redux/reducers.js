import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Handlers for reducers
const handlers = {

  'REC_DATA': (state, { data }) => Object.assign({}, 
        state,
        {
          loading: false,
          [state.transition === false || (data.geo && data.geo.length > 0) ? 'data' : 'tempdata']: data,
          isError: state.transition ? state.isError : typeof(data) === 'string',
        }
        ),

  'REQ_DATA': (state, action) => {
    var newState = Object.assign({}, 
      state, 
      {
        loading: true,
        tempdata: '',
      });
    return newState},

  'TRANS_END': (state, action) => 
    Object.assign({}, state, 
      { 
        transition: false,
        data: state.tempdata ? state.tempdata : state.data,
        isError: (state.tempdata ? state.tempdata : state.data) && typeof(state.tempdata ? state.tempdata : state.data) === 'string',
    }),
};


// Reducer with handlers mapping
const reducers = function(state={}, action) {
  return handlers.hasOwnProperty(action.type) 
    ? handlers[action.type](state, action)
    : state
}

// Use thunkMiddleware in store to handle function return
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export var store = createStoreWithMiddleware(reducers, 
// initial state
{
  map: {
    object: Object(),
    zoom: 4,
  },
  data: '',
  tempdata: '',
  isError: false,
  transition: true,
  loading: false,
});
