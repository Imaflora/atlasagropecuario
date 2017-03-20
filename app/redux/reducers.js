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
          user: { ...this.state.user, textfield: "" }
        }),

      'SHOW_FEEDBACK': () =>
        ({
          feedback: { show: true },
        }),

      'HIDE_FEEDBACK': () => {
        console.log('hide');
        return {
          feedback: { show: false }
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
      metadata: 'Visualização de todos os imóveis rurais públicos e privados e outras bases de dados georreferenciadas que compõem o espaço geográfico brasileiro. Nesta visualização as cores não se referem a nenhuma legenda ou categoria fundiária específica, elas apenas são utilizadas para diferenciar um imóvel rural do outro. Em breve disponibilizaremos outras formas de visualização da malha fundiária como, por exemplo, distinguindo as categorias fundiárias utilizadas e os imóveis públicos dos imóveis privados.',
      link: 'https://www.dropbox.com/s/a7jj4p1ncov9cjg/Imaflora_AtlasAgropecuario_Documentacao_MalhaFundiaria_vFinal.pdf?dl=1',
      downloadLink: 'https://www.dropbox.com/sh/cvtrj35w6hzehhb/AAA3qEtmgwmQ1lN5bY2e5zYIa?dl=0',
    },
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
    text: (
      <div>
        <p>Essa é a plataforma online do <i>Atlas - A geografia da agropecuára brasileira</i>. Apesar de ainda estarmos na fase inicial de desenvolvimento da plataforma gostaríamos de compartilhar um primeiro e importante resultado dessa iniciativa com vocês: a malha fundiária do Brasil.</p>
        <p>Esta versão da malha fundiária implementa regras de decisão para limpar as sobreposições existentes intra e entre-camadas, deixando apenas algumas dessas sobreposições com rastreabilidade no produto final através do valor de cada pixel da imagem. Enquanto isso é bom para garantir a consistência do dado, por outro lado tira do usuário a opção de decidir sobre a hierarquia que lhe faz mais sentido. Os esclarecimentos sobre o método e as regras de decisão utilizadas podem ser acessados &nbsp;
          <a href="https://www.dropbox.com/s/a7jj4p1ncov9cjg/Imaflora_AtlasAgropecuario_Documentacao_MalhaFundiaria_vFinal.pdf?dl=1">aqui</a>.
        </p>
        <p>Contamos com a sua ajuda para continuar aprimorando esse produto e estamos curiosos para ouvir as suas críticas, dúvidas ou sugestões de melhoria. Não deixe de se cadastrar na nossa plataforma para nos deixar uma mensagem e acompanhar as próximas fases do Atlas. Em breve iremos incorporar novas funcionalidades à plataforma e divulgar outros dados e informações relevantes para o desenvolvimento rural e a conservação dos recursos naturais no Brasil.</p>
      </div>),
    show: willShowAgain(),
  },
  footerText: (
    <div>
      <p>O <i>Atlas - A geografia da agropecuára brasileira</i> é uma iniciativa para gerar e disseminar conhecimento sobre a agropecuária brasileira a partir de uma plataforma online.</p>
      <p>Nessa plataforma estarão organizados e disponibilizados dados secundários e originais sobre o setor agropecuário, reunindo informações sobre o uso da terra, a aptidão agrícola, a distribuição, produção e produtividade das culturas em séries históricas, além de outras informações ambientais e sociais relevantes para o desenvolvimento rural e a conservação dos recursos naturais, como o desmatamento e o cumprimento do Código Florestal.</p>
      <p>Assim, a iniciativa visa facilitar o acesso à informação, fomentar estudos e fornecer subsídios para o apoio à tomada de decisão e à formulação de políticas públicas e privadas para o setor.</p>
    </div>
  ),
};

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducers, state);
