import { fromJS } from 'immutable';
import {
	AUTH_USER,
	AUTH_USER_COMPLETED,
	AUTH_USER_FAILED,
	AUTH_USER_SESSION,
	AUTH_USER_SESSION_COMPLETED,
	AUTH_USER_SESSION_FAILED,
	DE_AUTH_USER
} from './actionTypes';

export const initialState = fromJS({
	user: {},
	isAuthed: false,
	isAuthingUser: true,
	logInError: false
});

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER:
			return state.set('isAuthingUser', true);

		case AUTH_USER_COMPLETED:
			return state
				.set('isAuthingUser', false)
				.set('user', action.payload)
				.set('isAuthed', true)
				.set('logInError', false);

		case AUTH_USER_FAILED:
			return state
				.set('isAuthingUser', false)
				.set('isAuthed', false)
				.set('logInError', true);

		case AUTH_USER_SESSION:
			return state.set('isAuthingUser', true);

		case AUTH_USER_SESSION_COMPLETED:
			return state
				.set('isAuthingUser', false)
				.set('user', action.payload)
				.set('isAuthed', true);

		case AUTH_USER_SESSION_FAILED:
			return state.set('isAuthingUser', false).set('isAuthed', false);

		case DE_AUTH_USER:
			return state
				.set('isAuthingUser', false)
				.set('isAuthed', false)
				.set('logInError', false)
				.set('user', {});

		default:
			return state;
	}
};
