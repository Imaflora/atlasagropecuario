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
    land_tenure_categories: {
      name: 'Categorias Fundiárias',
      metadata: 'Este dado representa uma reclassificação dos imóveis rurais em suas respectivas categorias fundiárias (vide a legenda do mapa). Em breve disponibilizaremos outras opções de visualização e de seleção de camadas.',
      link: 'https://www.dropbox.com/s/a7jj4p1ncov9cjg/Imaflora_AtlasAgropecuario_Documentacao_MalhaFundiaria_vFinal.pdf?dl=1',
      downloadLink: 'https://www.dropbox.com/sh/cvtrj35w6hzehhb/AAA3qEtmgwmQ1lN5bY2e5zYIa?dl=0',
      legend: [
            {
                color: '#00441b',
                label: 'UCs de Proteção Integral',
            },
            {
                color: '#006d2c',
                label: 'UCs de Uso Sustentável',
            },
            {
                color: '#238b45',
                label: 'Terras Indígenas',
            },
            {
                color: '#41ab5d',
                label: 'Áreas Militares',
            },
            {
                color: '#74c476',
                label: 'Terras Não Destinadas',
            },
            {
                color: '#023858',
                label: 'Imóveis Privados INCRA',
            },
            {
                color: '#045a8d',
                label: 'Imóveis Privados CAR',
            },
            {
                color: '#0570b0',
                label: 'Imóveis Simulados',
            },
            {
                color: '#3690c0',
                label: 'Assentamentos',
            },
            {
                color: '#74a9cf',
                label: 'Territórios Comunitários',
            },
            {
                color: '#252525',
                label: 'Urbano, Transporte e Água',
            },
        ],
    },
    landTenure_publicPrivate: {
      name: 'Terras Públicas e Privadas',
      metadata: 'Este dado representa uma reclassificação dos imóveis rurais em suas respectivas categorias fundiárias (vide a legenda do mapa). Em breve disponibilizaremos outras opções de visualização e de seleção de camadas.',
      link: 'https://www.dropbox.com/s/a7jj4p1ncov9cjg/Imaflora_AtlasAgropecuario_Documentacao_MalhaFundiaria_vFinal.pdf?dl=1',
      downloadLink: 'https://www.dropbox.com/sh/cvtrj35w6hzehhb/AAA3qEtmgwmQ1lN5bY2e5zYIa?dl=0',
      legend: [
            {
                color: '#045a8d',
                label: 'Terras Privadas',
            },
            {
                color: '#238b45',
                label: 'Terras Públicas',
            },
            {
                color: '#252525',
                label: 'Urbano, Transporte e Água',
            },
        ],
    },
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