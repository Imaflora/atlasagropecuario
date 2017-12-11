import * as actions from './actions'

const willShowAgain = () =>
  !Boolean(localStorage['dontShowAgain2']
  )



export function initialDispatch() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(actions.changeLanguage(state.language));
  }
};

export const state = {
  map: {
    zoom: 4,
    center: [-5679446.090587838, -2172541.4206502824],
    layers: [''],
    coverLayer: 'carbon_map',
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
    layer: undefined,
    show: false,
  },
  layerSelector: {
    show: window.innerWidth > 580
  },
  news: {
    show: false,  
  },
  publications: {
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
  downloadSource: 'https://www.dropbox.com/sh/cvtrj35w6hzehhb/AAA3qEtmgwmQ1lN5bY2e5zYIa?dl=0', 
  translation: {},
  language: (navigator.language.startsWith('pt') ? 'pt-BR' : 'en-US' ),
  message: {
    show: false
  }
};