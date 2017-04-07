var translateUrl = servUrl + 'translation/';

const willShowAgain = () =>
  !Boolean(localStorage['dontShowAgain']
  )

function receiveTranslation(data) {
  return {
    type: "RECEIVE_TRANSLATION",
    data: data,
  }
}

export function initialDispatch() {
  return function (dispatch, getState) {
    axios.get(translateUrl + navigator.language).then((data) => {
      dispatch(receiveTranslation(data.data.data));
    })
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
    text: (
      <div>
        <p>Essa é a plataforma online do <i>Atlas - A geografia da agropecuária brasileira</i>. Apesar de ainda estarmos na fase inicial de desenvolvimento da plataforma gostaríamos de compartilhar um primeiro e importante resultado dessa iniciativa com vocês: a malha fundiária do Brasil.</p>
        <p>Esta versão da malha fundiária implementa regras de decisão para limpar as sobreposições existentes intra e entre-camadas, deixando apenas algumas dessas sobreposições com rastreabilidade no produto final através do valor de cada pixel da imagem. Enquanto isso é bom para garantir a consistência do dado, por outro lado tira do usuário a opção de decidir sobre a hierarquia que lhe faz mais sentido. Os esclarecimentos sobre o método e as regras de decisão utilizadas podem ser acessados &nbsp;
          <a href="https://www.dropbox.com/s/a7jj4p1ncov9cjg/Imaflora_AtlasAgropecuario_Documentacao_MalhaFundiaria_vFinal.pdf?dl=1">aqui</a>.
        </p>
        <p>Contamos com a sua ajuda para continuar aprimorando esse produto e estamos curiosos para ouvir as suas críticas, dúvidas ou sugestões de melhoria. Não deixe de se cadastrar na nossa plataforma para nos deixar uma mensagem e acompanhar as próximas fases do Atlas. Em breve iremos incorporar novas funcionalidades à plataforma e divulgar outros dados e informações relevantes para o desenvolvimento rural e a conservação dos recursos naturais no Brasil.</p>
      </div>),
    show: willShowAgain(),
  },
  footerText: (
    <div>
      <p>O <i>Atlas - A geografia da agropecuária brasileira</i> é uma iniciativa para gerar e disseminar conhecimento sobre a agropecuária brasileira a partir de uma plataforma online. Pretende facilitar o entendimento sobre onde, o que, quanto, quem, como e com quais consequências se produz no campo no Brasil.</p>
      <p>Nessa plataforma estarão organizados e disponibilizados dados secundários e originais sobre o setor agropecuário, reunindo informações sobre o uso da terra, a aptidão agrícola, a distribuição, produção e produtividade das culturas em séries históricas, além de outras informações ambientais e sociais relevantes para o desenvolvimento rural e a conservação dos recursos naturais, como o desmatamento e o cumprimento do Código Florestal.</p>
      <p>Assim, a iniciativa visa facilitar o acesso à informação, fomentar estudos e fornecer subsídios para o apoio à tomada de decisão e à formulação de políticas públicas e privadas para o setor.</p>
    </div>
  ),
  legend: {
    show: true,
  },
  translation: {}
};