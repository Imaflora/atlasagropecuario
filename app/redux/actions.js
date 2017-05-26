var serverUrl = (process.env.NODE_ENV == 'local' ? 'http://localhost:9000/' : servUrl);
var serverUrlGraphql = serverUrl + 'graphql';
var serverUrlApi = serverUrl + 'api/';
var translateUrl = serverUrlApi + 'translation/';


function urlencodeFormData(fd) {
	var s = '';
	function encode(s) { return encodeURIComponent(s).replace(/%20/g, '+'); }
	for (var pair of fd.entries()) {
		if (typeof pair[1] == 'string') {
			s += (s ? '&' : '') + encode(pair[0]) + '=' + encode(pair[1]);
		}
	}
	return s;
}

export function requestData() {
	return {
		type: 'REQ_DATA'
	};
}

function receiveData(data) {
	return {
		type: 'REC_DATA',
		data: data
	};
}

function inTransition() {
	return {
		type: 'IN_TRANS',
	};
}

export function transitionEnd() {
	return {
		type: 'TRANS_END',
	}
}

export function openDownloadForm(layer) {
	if (localStorage.hasOwnProperty('user')) {
		return function (dispatch) {
			dispatch(executeDownload());
		}
	} else {
		return {
			type: 'DOWNLOAD_LAYER',
			layer: layer
		};
	}
}

export function hideDownload() {
	return {
		type: 'HIDE_DOWNLOAD'
	}
}

export function toggleMessage(text = "") {
	return {
		type: 'TOGGLE_MESSAGE',
		text: text
	}
}

export function showLegend() {
	return {
		type: 'SHOW_LEGEND'
	};
}

export function hideLegend() {
	return {
		type: 'HIDE_LEGEND'
	};
}

export function openMetadata(layer) {
	return {
		type: 'OPEN_METADATA',
		layer: layer
	}
}

export function hideMetadata() {
	return {
		type: 'HIDE_METADATA'
	}
}


export function toggleWelcome() {
	return {
		type: 'TOGGLE_WELCOME'
	}
}

export function toggleNews() {
	return {
		type: 'TOGGLE_NEWS'
	}
}

export function togglePublications() {
	return {
		type: 'TOGGLE_PUBLICATIONS'
	}
}

function insertOrUpdateUser({ email, nome, telefone, instituicao, departamento }) {
	var graphQuery = `
mutation {
  insertOrUpdateUser (input: {
		varEmail: "${email}"
		varNome: "${nome}"
		varTelefone: "${telefone}"
		varInstituicao: "${instituicao}"
		varDepartamento: "${departamento}"
  }) {
    string
  }
}
	`;
	return axios.post(serverUrlGraphql, { query: graphQuery });
}

export function submitDownload() {
	return function (dispatch, getState) {
		var state = getState();

		var userEmail = state.user.email;
		var userText = state.user.textfield;
		insertOrUpdateUser(state.user).then(() =>
			dispatch(insertDownloadFeedback(userEmail, userText)) #Do not remove dispatch!!!
		);
		dispatch(executeDownload());
		dispatch(hideDownload());
		localStorage['user'] = '';
		dispatch(toggleMessage(state.translation['thanksDownload']));
	}
}


export function insertDownloadFeedback(email, text) {
	return function (dispatch, getState) {
		var state = getState();
		var graphQuery = `
mutation {
  insertDownloadFeedback (input: {
    varEmail: "${email}"
    varTexto: ${JSON.stringify(text)}
  }) {
    string
  }
}`
		axios.post(serverUrlGraphql, { query: graphQuery }).then();
	}
}

export function submitFeedback(s) {
	var formData = new FormData(s.children[1]);
	var formDataX = urlencodeFormData(formData)
	return function (dispatch, getState) {
		var state = getState();
		var email = state.user.email;
		var assunto = state.user.assunto;
		var outro = state.user.outro;
		var text = state.user.textfield;

		axios.post("https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8", formDataX, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then();

		insertOrUpdateUser(state.user).then(() => {
			dispatch(insertFeedback(email, assunto, outro, text));
		});
		dispatch(toggleMessage(state.translation['thanksFeedback']));
	}
}


export function insertFeedback(email, assunto, outro, text) {
	return function (dispatch, getState) {
		var state = getState();
		var fn = "insertFeedback";
		var field = `varAssunto: "${assunto}"`;
		if (assunto === 'ou') {
			fn = "insertFeedbackOther";
			field = `varOutro: "${outro}"`
		}

		var graphQuery = `
mutation {
  ${fn} (input: {
    varEmail: "${email}"
    ${field}
    varTexto: ${JSON.stringify(text)}
  })  {
    string
  }
}`
		axios.post(serverUrlGraphql, { query: graphQuery }).then();
		axios.post(serverUrlApi + 'sendComment', { email: email, name: state.user.nome, comment: text }).then();
	}
}

function executeDownload() {
	return (dispatch, getState) => {
		var state = getState();
		window.open(state.download.layer === undefined ? state.downloadSource : state.translation.layersObj[state.download.layer].downloadLink, '_blank');
	};
}


function receivedUserInfo(user) {
	return {
		type: 'RECEIVE_USER',
		user: user
	}
}

export function getUserInfo(email) {
	var graphQuery = `
		mutation {
		getUser (input: {
			varEmail: "${email}"
		}) {
			usuarios {
				nome
				instituicao
				departamento
				telefone
			}
		}
}`

	return function (dispatch) {
		axios.post(serverUrlGraphql, { query: graphQuery }).then(({ data }) => {
			if (data.data.getUser) dispatch(receivedUserInfo(data.data.getUser.usuarios[0]));
		})
	}
}

export function updateFormValue(what, value) {
	return {
		type: 'UPDATE_FORM',
		what: what,
		value: value
	}
}

export function toggleLayersSelector() {
	return {
		type: 'LAYERS_SELECTOR_TOGGLE'
	}
}

export function getInformation(x, y, layer) {
	var graphQuery = `
mutation {
  getInfowindow(input: {
    x: ${x},
    y: ${y},
    varCamada: "${layer}"
  }) {
     json
  }
}`

	return function (dispatch) {
		dispatch(mapClick(undefined));
		axios.post(serverUrlGraphql, { query: graphQuery }).then(({ data }) => {
			console.log(data);
			var coordinates = [x, y];
			if (!data.data.getInfowindow)
				coordinates = undefined;
			dispatch(mapClick(coordinates));
			dispatch(setInfoWindow(JSON.parse(data.data.getInfowindow.json)));
		})
	}
}

export function setMapView(zoom, center) {
	return {
		type: "SET_MAP_VIEW",
		zoom: zoom,
		center: center,
	}
}

export function setMapClick(click) {
	return {
		type: "MAP_CLICK",
		click: click,
	}
}


function setInfoWindow(value) {
	return {
		type: 'SET_INFO_WINDOW',
		value: value,
	}
}

function mapClick(coordinates) {
	return {
		type: 'MAP_CLICK',
		coordinates: coordinates,
	}
}

export function changeLayer(value) {
	return {
		type: 'LAYER_CHANGE',
		layer: value,
	}
}

export function changeLanguage(language) {
	var graphQuery = `
mutation {
  getTranslation(input: {
    varLcid: "${language}"
  }) {
    json
  }
}
	`;

	return function (dispatch) {
		dispatch(setLanguage(language));
		axios.post(serverUrlGraphql, { query: graphQuery })
			.then(({data}) => {
				dispatch(receiveTranslation(JSON.parse(data.data.getTranslation.json)));
			})
	}
}

function setLanguage(language) {
	return {
		type: 'SET_LANGUAGE',
		language: language,
	}
}


function receiveTranslation(data) {
	return {
		type: "RECEIVE_TRANSLATION",
		data: data,
	}
}

function retranslate() {

}