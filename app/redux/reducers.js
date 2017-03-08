import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const modifyState = function (state, modifyState) {
  return
}

class ActionHandler {
  constructor() {
    this.handlers = {

      'REC_DATA': ({ data }) =>
        ({
          loading: false,
          [this.state.transition === false || (data.geo && data.geo.length > 0) ? 'data' : 'tempdata']: data,
          isError: state.transition ? state.isError : typeof (data) === 'string',
        }),

      'REQ_DATA': (action) =>
        ({
          loading: true,
          tempdata: '',
        }),

      'TRANS_END': () =>
          ({
            transition: false,
            data: state.tempdata ? state.tempdata : state.data,
            isError: (state.tempdata ? state.tempdata : state.data) && typeof (state.tempdata ? state.tempdata : state.data) === 'string',
          }),

      'DOWNLOAD_LAYER': ({ layer }) =>
        ({
          download: {
            layer: layer,
            show: true,
          }
        }),

      'HIDE_DOWNLOAD': () =>
        ({
          download: { show: false }
        })
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
  return actionHandler.handlers.hasOwnProperty(action.type)
    ? actionHandler.getNewState(state, action)
    : state
}

// Use thunkMiddleware in store to handle function return
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export var store = createStoreWithMiddleware(reducers,
  // initial state
  {
    map: {
      zoom: 4,
      layers: [''],
    },
    data: '',
    tempdata: '',
    isError: false,
    transition: true,
    loading: false,
    topics: {
      comentario: "Comentário",
      sugestao: "Sugestão",
      duvida: "Dúvida",
      outro: "Outro"
    },
    metadata: {
      layer: '',
    },
    download: {
      layer: '',
      show: false,
    },
  });
