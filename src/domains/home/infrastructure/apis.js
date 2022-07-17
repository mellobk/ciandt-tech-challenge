import { authHeader, handleResponse } from '../../../shared/infrastructure/api/apiHandler';
import { pokemosUrl  } from './backend-urls';


export const getPokemos = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(pokemosUrl, requestOptions).then(handleResponse);
};

export const fetchPokemon = (ulr) => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(ulr, requestOptions).then(handleResponse);
};

export default {};