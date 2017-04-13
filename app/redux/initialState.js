import * as actions from './actions'

const willShowAgain = () =>
  !Boolean(localStorage['dontShowAgain']
  )



export function initialDispatch() {
  return function (dispatch, getState) {
    dispatch(actions.changeLanguage(navigator.language));
  }
};

export const state = {
  map: {
    zoom: 4,
    center: [-5679446.090587838, -2172541.4206502824],
    layers: [''],
    coverLayer: 'land_tenure_categories',
    click: undefined,
  },
  infoWindow: {},
  isError: false,
  transition: true,
  loading: false,
  topics: ['cm', 'sg', 'dv', 'ou'],
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
  layerSelector: {
    show: window.innerWidth > 580
  },
  news: {
    show: false,  
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
    show: willShowAgain(),
  },
  legend: {
    show: true,
  },
  translation: {},
  language: navigator.language,
};