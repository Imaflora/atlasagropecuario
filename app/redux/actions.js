var serverUrl = servUrl + '/graphql';

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

export function fetchQuery() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestData());
		return axios.get(servUrl + 'query.php', {
			params: { query: state.query }
		}).then((response) => {
			dispatch(receiveData(response.data));
			setTimeout(() => dispatch(inTransition()), 500);
		}).catch(e => {
			console.warn('Erro na resposta do servidor');
			console.warn(e);
		});
	}
}

export function openDownloadForm(layer) {
	return {
		type: 'DOWNLOAD_LAYER',
		layer: layer
	}
}

export function hideDownload() {
	return {
		type: 'HIDE_DOWNLOAD'
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

function hideFeedback() {
	return {
		type: 'HIDE_FEEDBACK'
	}
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


export function hideWelcome() {
	return {
		type: 'HIDE_WELCOME'
	}
}


function insertOrUpdateUser({email, nome, telefone, instituicao, departamento}) {
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
}`;
	return axios.post(serverUrl, { query: graphQuery })
}

export function submitDownload() {
	return function (dispatch, getState) {
		var state = getState();

		var userEmail = state.user.email;
		var userText = state.user.textfield;
		insertOrUpdateUser(state.user).then(() =>
			dispatch(insertDownloadFeedback(userEmail, userText))
		);
		dispatch(executeDownload());
		dispatch(hideDownload());
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
		axios.post(serverUrl, { query: graphQuery }).then();
	}
}

export function submitFeedback() {
	return function (dispatch, getState) {
		var state = getState();
		var email = state.user.email;
		var assunto = state.user.assunto;
		var outro = state.user.outro;
		var text = state.user.textfield;

		insertOrUpdateUser(state.user).then(() => {
			dispatch(insertFeedback(email, assunto, outro, text));
		})
		dispatch(hideFeedback());
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
  }) {
    string
  }
}`
		axios.post(serverUrl, { query: graphQuery }).then();
	}
}

function executeDownload() {
	return (dispatch, getState) => {
		var state = getState();
		window.location.href = state.layers[state.download.layer].downloadLink;
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
		axios.post(serverUrl, { query: graphQuery }).then(({ data }) => {
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

export function showFeedback() {
	return {
		type: 'SHOW_FEEDBACK',
	}
}

export function toggleLayersSelector() {
	return {
		type: 'LAYERS_SELECTOR_TOGGLE'
	}
}

export function getInformation(x, y) {
	var graphQuery = `
	mutation {
		getLandData(input: {
			x: ${x}
			y: ${y}
		}) {
			json
		}
	}`

	return function (dispatch) {
		dispatch(mapClick(undefined));
		axios.post(serverUrl, { query: graphQuery }).then(({ data }) => {
			var coordinates = [x, y];
			if (!data.data.getLandData.json) 
				coordinates = undefined;
			dispatch(mapClick(coordinates));
			dispatch(setInfoWindow(JSON.parse(data.data.getLandData.json)));
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