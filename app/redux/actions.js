var serverUrl = process.env.NODE_ENV == 'production' ? 'http://geonode.imaflora.org:8000/graphql' : 'http://localhost:9000/graphql'


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

export function hideFeedback() {
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

export function submitDownload() {
	return function (dispatch, getState) {
		var state = getState();
		var graphQuery = `
mutation {
  insertOrUpdateUser (input: {
		varEmail: "${state.user.email}"
		varNome: "${state.user.nome}"
		varTelefone: "${state.user.telefone}"
		varInstituicao: "${state.user.instituicao}"
		varDepartamento: "${state.user.departamento}"
  }) {
    string
  }
}`
		axios.post(serverUrl, { query: graphQuery }).then(() => 
			dispatch(insertDownloadFeedback())
		);
		dispatch(executeDownload());
		dispatch(hideDownload());
	}
}


export function insertDownloadFeedback() {
	return function (dispatch, getState) {
		var state = getState();
		var graphQuery = `
mutation {
  insertDownloadFeedback (input: {
    varEmail: "${state.user.email}"
    varTexto: "${state.user.textfield}"
  }) {
    string
  }
}`
		axios.post(serverUrl, { query: graphQuery }).then();
		dispatch(executeDownload());
		dispatch(hideDownload());
	}
}


export function insertFeedback() {
	return function (dispatch, getState) {
		var state = getState();
		var fn = "insertFeedback";
		var field = `varAssunto: "${state.user.assunto}"`;
		if (state.user.assunto === 'ou') {
			fn = "insertFeedbackOther";
			field = `varOutro: "${state.user.outro}"`
		}

		var graphQuery = `
mutation {
  ${fn} (input: {
    varEmail: "${state.user.email}"
    ${field}
    varTexto: "${state.user.textfield}"
  }) {
    string
  }
}`
		axios.post(serverUrl, { query: graphQuery }).then();
		dispatch(hideFeedback());
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
	var graphQuery = `{
		user: usuarioByEmail(email: "${email}") {
			email
			nome
			instituicao
			departamento
			telefone
		}
	}`

	return function (dispatch) {
		axios.post(serverUrl, { query: graphQuery }).then(({ data }) => {
			if (data.data.user) dispatch(receivedUserInfo(data.data.user));
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
	return  {
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
		axios.post(serverUrl, { query: graphQuery }).then(({ data }) => {
			dispatch(setInfoWindow(JSON.parse(data.data.getLandData.json)));
		})
	}
}


function setInfoWindow(value) {
	return  {
		type: 'SET_INFO_WINDOW',
		value: value,
	}
}