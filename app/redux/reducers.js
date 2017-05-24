import * as initialState from './initialState'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

class ActionHandler {
  constructor() {
    this.state = null;
    this.handlers = {

      'REC_DATA': ({ data }) =>
        ({
          loading: false,
          [this.state.transition === false || (data.geo && data.geo.length > 0) ? 'data' : 'tempdata']: data,
          isError: state.transition ? state.isError : typeof (data) === 'string',
        }),

      'DOWNLOAD_LAYER': ({ layer }) =>
        ({
          download: {
            layer: layer,
            show: true,
          }
        }),

        'TOGGLE_MESSAGE': ({ text }) => 
        ({
          message: { show: !this.state.message.show, text: text },
        }),

      'HIDE_DOWNLOAD': () =>
        ({
          download: { show: false },
          user: { ...this.state.user, textfield: "" }
        }),

      'HIDE_LEGEND': () =>
        ({
          legend: { show: false }
        }),

      'SHOW_LEGEND': () =>
        ({
          legend: { show: true }
        }),

      'HIDE_FEEDBACK': () => {
        return {
          user: { ...this.state.user, textfield: "", assunto: "cm" }
        }
      },

      'LAYERS_SELECTOR_TOGGLE': () => {
        return {
          layerSelector: { show: !this.state.layerSelector.show }
        }
      },

      'OPEN_METADATA': ({ layer }) =>
        ({
          metadata: {
            layer: layer,
            show: true,
          }
        }),

      'HIDE_METADATA': () =>
        ({
          metadata: { show: false }
        }),


      'SET_INFO_WINDOW': ({ value }) => {
        return {
          infoWindow: value
        }
      },

      'UPDATE_FORM': ({ what, value }) => {
        var newState = {};
        newState[what] = value;
        return {
          user: { ...this.state.user, ...newState }
        }
      },

      'RECEIVE_USER': ({ user }) => ({
        user: { ...this.state.user, ...user }
      }),
          
       'TOGGLE_NEWS': () => {
        return {
          news: { show: !this.state.news.show }
        }
      },

       'TOGGLE_PUBLICATIONS': () => {
        return {
          publications: { show: !this.state.publications.show }
        }
      },

      'TOGGLE_WELCOME': () =>
        ({
          welcome: { show: !this.state.welcome.show }
        }),

      'RECEIVE_TRANSLATION': ({ data }) => (
        {
          translation: data,
        }
      ),

      'SET_MAP_VIEW': ({ zoom, center }) => ({
        map: { ...this.state.map, zoom, center }
      }),

      'MAP_CLICK': ({ coordinates }) => (
        { map: { ...this.state.map, click: coordinates } }
      ),

      'LAYER_CHANGE': ({ layer }) => (
        { map: { ...this.state.map, coverLayer: layer } }
      ),

      'SET_LANGUAGE': ({language}) => (
        {language: language }
      ),
      

    };
  }

  modifyState(state, modifyState) {
    return Object.assign({},
      state,
      modifyState
    )
  }

  getNewState(state, action) {
    var modifyStateObject = this.handlers[action.type](action);
    return this.modifyState(state, modifyStateObject);
  }
}


const actionHandler = new ActionHandler();

// Reducer with handlers mapping
const reducers = function (state = {}, action) {
  actionHandler.state = state;
  return actionHandler.handlers.hasOwnProperty(action.type)
    ? actionHandler.getNewState(state, action)
    : state
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


var createStoreWithMiddleware;
if (process.env.NODE_ENV !== 'production') {
   createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore);
}
export const store = createStoreWithMiddleware(reducers, initialState.state, composeEnhancers());


store.dispatch(initialState.initialDispatch())