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
	return function(dispatch, getState) {
		var state = getState();
		dispatch(requestData());
		return axios.get(servUrl + 'query.php', {
			params: {query: state.query}
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

export function submitDownload(data, layer) {
	console.log('handleSubmit');
	console.log(data);
	console.log(layer);
	return {
		type: 'HIDE_DOWNLOAD'
	}
}

