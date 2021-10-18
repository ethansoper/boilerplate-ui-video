import { SUCCESS_MESSAGE, FAILURE_MESSAGE } from './actionTypes';

export const successMessage = (payload) => ({
	type: SUCCESS_MESSAGE,
	payload
});

export const failureMessage = (payload) => ({
	type: FAILURE_MESSAGE,
	payload
});
