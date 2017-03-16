import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const modifyState = function (state, modifyState) {
  return
}

class ActionHandler {
  constructor() {
    this.state=null;
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
        }),

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

      'UPDATE_FORM': ({what, value}) => {
        var newState = {};
        newState[what] = value;
        return {
          user: { ...this.state.user, ...newState }
        }
      },

      'RECEIVE_USER': ({ user }) => ({
          user: user
        }),
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

// Use thunkMiddleware in store to handle function return
var state = {
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
      show: false,
    },
    download: {
      layer: '',
      show: false,
    },
    layers: {
      land_ownership255: {
        name: 'Imóveis Rurais',
        metadata: 'Visualização de todos os imóveis rurais, públicos e privados, identificados a partir da compilação de diversas bases georreferenciadas e disponíveis livremente na internet.',
        link: 'http://www.imaflora.org',
      },
      land_ownership_private: {
        name: 'Terras Públicas e Privadas',
        metadata: 'Visualização das terras públicas e privadas do Brasil, identificadas a partir da compilação de diversas bases georreferenciadas e disponíveis livremente na internet.',
        link: 'http://www.imaflora.org',
      }
    },
    layerSelector: {
      show: true
    },
    user: {
      email: '',
      nome: '',
      instituicao: '',
      departamento: '',
      telefone: '',
      textfield: '',
    }
  };

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export var store = createStoreWithMiddleware(reducers, state);
