
import { ERROR_ON_REQUEST, SERVER_SIDE_ERROR } from '../../application/constants/messages/error-messages';
import { history } from '../../application/helpers/history';
import { homeRoute } from '../routing/routes';
import { defaultGetPlaces } from './backend-urls';

export const handleResponse = (response) => {
	
	return response.json().then((data) => {
		if (!response.ok) {
			if (response.status === 401) {
				typeof window !== 'undefined' && localStorage.removeItem('user');
				history.push(homeRoute);
			}
			const unknowMessage = response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
			let error = (data && (data.error || data.message)) || unknowMessage;
			if (response.status === 404) {
				error = 'NOT_FOUND';
			}
			return Promise.reject(data.error_type ? data : error);
		}
		return data;
	});
};

export function authHeader(contentType = 'application/json') {
	// return authorization header with jwt token
	const user = JSON.parse(localStorage.getItem('user'));
	if (user && user.token) {
		return new Headers({ Authorization: `${user.token}`, 'Content-Type': contentType });
	}
	return new Headers({ 'Content-Type': contentType });
}


export const getPlaces = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
    const response = fetch(defaultGetPlaces, requestOptions).then(handleResponse);
	return response
};
