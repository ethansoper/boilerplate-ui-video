import {
	AUTH_USER,
	AUTH_USER_COMPLETED,
	AUTH_USER_FAILED,
	AUTH_USER_SESSION,
	AUTH_USER_SESSION_COMPLETED,
	AUTH_USER_SESSION_FAILED,
	DE_AUTH_USER
} from './actionTypes';

export const authUser = (username, password) => ({
	type: AUTH_USER,
	payload: {
		username,
		password
	}
});
export const authUserCompleted = (payload) => ({
	type: AUTH_USER_COMPLETED,
	payload
});

export const authUserFailed = (payload) => ({
	type: AUTH_USER_FAILED,
	payload
});

export const authUserSession = (payload) => ({
	type: AUTH_USER_SESSION,
	payload
});
export const authUserSessionCompleted = (payload) => ({
	type: AUTH_USER_SESSION_COMPLETED,
	payload
});

export const authUserSessionFailed = (payload) => ({
	type: AUTH_USER_SESSION_FAILED,
	payload
});

export const deAuthUser = (payload) => ({
	type: DE_AUTH_USER,
	payload
});
