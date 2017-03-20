import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const modifyState = function (state, modifyState) {
  return
}

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
          download: { show: false },
          user: {...this.state.user, textfield: ""}
        }),

        'SHOW_FEEDBACK': () =>
        ({
          feedback: { show: true },
        }),

        'HIDE_FEEDBACK': () => {
          console.log('hide');
        return {
          feedback: { show: false }
        }},

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
        user: {...this.state.user, ...user}
      }),

      'HIDE_WELCOME': () =>
        ({
          welcome: { show: false }
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

var willShowAgain = function () {
  return !Boolean(localStorage['dontShowAgain'])
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
    cm: "Comentário",
    sg: "Sugestão",
    dv: "Dúvida",
    ou: "Outro"
  },
  metadata: {
    layer: '',
    show: false,
  },
  download: {
    layer: '',
    show: false,
  },
  feedback: {
    show: false,
  },
  layers: {
    land_ownership255: {
      name: 'Malha Fundiária',
<<<<<<< HEAD
      metadata: 'Visualização de todos os imóveis rurais, públicos e privados, identificados a partir da compilação de diversas bases georreferenciadas e disponíveis livremente na internet.',
      link: 'https://imaflora365-my.sharepoint.com/personal/vinicius_imaflora_org/_layouts/15/guestaccess.aspx?docid=195e58fe6730a4698b420dc9f50a12f62&authkey=Ab90F1ITu1EAwhKM-dTKlMM',
      downloadLink: 'https://www.dropbox.com/sh/cvtrj35w6hzehhb/AAA3qEtmgwmQ1lN5bY2e5zYIa?dl=0',
    },
=======
      metadata: 'Visualização de todos os imóveis rurais públicos e privados e outras bases de dados georreferenciadas que compõem o espaço geográfico brasileiro.',
      link: 'https://imaflora365-my.sharepoint.com/personal/vinicius_imaflora_org/_layouts/15/guestaccess.aspx?docid=195e58fe6730a4698b420dc9f50a12f62&authkey=Ab90F1ITu1EAwhKM-dTKlMM',
    },
    land_ownership_private: {
      name: 'Terras Públicas e Privadas',
      metadata: 'isualização das terras públicas e privadas do Brasil, identificadas a partir da compilação de diversas bases georreferenciadas e disponíveis livremente na internet.',
      link: 'http://www.imaflora.org',
    }
>>>>>>> origin/styles
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
    assunto: 'cm',
    textfield: '',
    outro: '',
  },
  welcome: {
<<<<<<< HEAD
    text: (<div><p>Essa é a plataforma online do Atlas - A geografia da agropecuára Brasileira.</p>
      <p>Apesar de ainda estarmos na fase inicial de desenvolvimento da plataforma gostaríamos de compartilhar um primeiro e importante resultado dessa iniciativa com vocês: a malha fundiária do Brasil.</p>
      <p>Esse dado foi gerado a partir de uma colaboração entre o Imaflora, o GeoLab (Esalq/USP) e o Royal Institute of Technology (KTH-Suécia) e, pela primeira vez, oferece aberta e publicamente para a sociedade uma visão do conjunto das terras públicas e privadas do país.</p>
      <p>Seguiremos aprimorando nossa plataforma a partir de novas funcionalidades e da divulgação de outros dados e informações relevantes. Não deixe de preencher o nosso cadastro e acompanhar as próximas fases do Atlas.</p>
=======
    text: (<div><p>Essa é a plataforma online do Atlas - A geografia da agropecuára Brasileira. Apesar de ainda estarmos na fase inicial de desenvolvimento da plataforma gostaríamos de compartilhar um primeiro e importante resultado dessa iniciativa com vocês: a malha fundiária do Brasil.</p><p>Esta versão da malha fundiária implementa regras de decisão para limpar as sobreposições existentes intra e entre-camadas, deixando apenas algumas dessas sobreposições com rastreabilidade no produto final através do valor de cada pixel da imagem. Enquanto isso é bom para garantir a consistência do produto final, por outro lado tira do usuário a opção de decidir sobre a hierarquia que lhe faz mais sentido. Os esclarecimentos sobre o método e a regra de decisão utilizada podem ser acessados <a href="https://imaflora365-my.sharepoint.com/personal/vinicius_imaflora_org/_layouts/15/guestaccess.aspx?docid=195e58fe6730a4698b420dc9f50a12f62&authkey=Ab90F1ITu1EAwhKM-dTKlMM">aqui</a>.</p><p>Contamos com a sua ajuda para continuar aprimorando esse produto e estamos curiosos para ouvir as suas críticas, dúvidas ou sugestões de melhoria. Não deixe de se cadastrar na nossa plataforma para nos deixar uma mensagem e acompanhar as próximas fases do Atlas. Em breve iremos incorporar novas funcionalidades à plataforma e divulgar outros dados e informações relevantes para o desenvolvimento rural e a conservação dos recursos naturais no Brasil.</p>
>>>>>>> origin/styles
    </div>),
    show: willShowAgain(),
  },
};

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducers, state);
